import Link from 'next/link';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost';

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  whatsapp: 'btn-whatsapp',
  ghost: 'btn-ghost',
};

export function LinkButton({
  variant = 'primary',
  href,
  external,
  children,
  className = '',
}: LinkButtonProps) {
  const classes = `btn ${variantClass[variant]} ${className}`.trim();
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: NativeButtonProps) {
  return (
    <button className={`btn ${variantClass[variant]} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
