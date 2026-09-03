import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { site } from '@/lib/site';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string; // honeypot field, must stay empty
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_USER || !SMTP_PASSWORD) {
    console.error('Contact form: missing SMTP_USER/SMTP_PASSWORD env vars');
    return NextResponse.json({ error: 'server_misconfigured' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || 'smtp.gmail.com',
    port: SMTP_PORT ? Number(SMTP_PORT) : 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  const company = body.company?.trim() || '—';
  const phone = body.phone?.trim() || '—';
  const service = body.service?.trim() || '—';

  try {
    await transporter.sendMail({
      from: `"${site.name} — Sitio web" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || site.email,
      replyTo: email,
      subject: `Nuevo contacto: ${name}${company !== '—' ? ` (${company})` : ''}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nEmpresa: ${company}\nTeléfono: ${phone}\nServicio: ${service}\n\nMensaje:\n${message}`,
      html: `
        <table style="font-family: sans-serif; font-size: 14px;">
          <tr><td><strong>Nombre</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Correo</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Empresa</strong></td><td>${escapeHtml(company)}</td></tr>
          <tr><td><strong>Teléfono</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Servicio</strong></td><td>${escapeHtml(service)}</td></tr>
        </table>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });
  } catch (err) {
    console.error('Contact form: failed to send email', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
