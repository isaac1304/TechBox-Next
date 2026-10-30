export type Certification = {
  /** ID del badge en Credly. */
  badgeId: string;
  /** Nombre corto para la tarjeta. */
  shortLabel: string;
  label: string;
  issuer: string;
  image: string;
  /** Las vencidas se muestran marcadas y no se declaran en JSON-LD. */
  expired?: boolean;
};

/** Fuente única de certificaciones del fundador (home, /nosotros, SRE y JSON-LD). */
export const certifications: Certification[] = [
  {
    badgeId: 'c120126b-dc33-445a-a4f8-182200dfe425',
    shortLabel: 'Certified Kubernetes Administrator (CKA)',
    label: 'Certified Kubernetes Administrator',
    issuer: 'The Linux Foundation',
    image: '/badges/cka.png',
  },
  {
    badgeId: '8f5e3a3a-e21f-4e42-b7f4-42409d431f33',
    shortLabel: 'Istio Certified Associate (ICA)',
    label: 'Istio Certified Associate',
    issuer: 'The Linux Foundation',
    image: '/badges/istio-ica.png',
  },
  {
    badgeId: '96c63672-58a8-494c-98cf-0f11ff492b46',
    shortLabel: 'Google Cloud Digital Leader',
    label: 'Cloud Digital Leader',
    issuer: 'Google Cloud',
    image: '/badges/gcp-digital-leader.png',
  },
  {
    badgeId: 'b1dc57b5-52d7-4eb1-a685-c09094343ccc',
    shortLabel: 'HashiCorp Terraform Associate',
    label: 'HashiCorp Certified: Terraform Associate (003)',
    issuer: 'HashiCorp',
    image: '/badges/terraform-associate.png',
    expired: true,
  },
];

export const activeCertifications = certifications.filter((c) => !c.expired);

export function credlyUrl(cert: Certification): string {
  return `https://www.credly.com/badges/${cert.badgeId}/public_url`;
}
