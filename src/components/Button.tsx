import type { ComponentProps, ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from '@/i18n/navigation';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost';

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type InternalLinkButtonProps = BaseProps & {
  href: ComponentProps<typeof Link>['href'];
  external?: false;
};

type ExternalLinkButtonProps = BaseProps & {
  href: string;
  external: true;
};

type LinkButtonProps = InternalLinkButtonProps | ExternalLinkButtonProps;

type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  whatsapp: 'btn-whatsapp',
  ghost: 'btn-ghost',
};

export function LinkButton(props: LinkButtonProps) {
  const { variant = 'primary', children, className = '' } = props;
  const classes = `btn ${variantClass[variant]} ${className}`.trim();
  if (props.external) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={props.href} className={classes}>
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
