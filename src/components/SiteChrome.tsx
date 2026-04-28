'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function SiteChromeGate({
  children,
  hidePaths = ['/finanzas'],
}: {
  children: ReactNode;
  hidePaths?: string[];
}) {
  const pathname = usePathname();
  const isHidden = hidePaths.some((p) => pathname === p || pathname.startsWith(p + '/'));
  if (isHidden) return null;
  return <>{children}</>;
}
