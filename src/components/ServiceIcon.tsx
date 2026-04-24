import {
  Code2,
  Cloud,
  Workflow,
  ShieldCheck,
  BarChart3,
  Compass,
} from 'lucide-react';
import type { Service } from '@/data/services';

const map = {
  code: Code2,
  cloud: Cloud,
  workflow: Workflow,
  shield: ShieldCheck,
  chart: BarChart3,
  compass: Compass,
} as const;

export default function ServiceIcon({
  name,
  className,
}: {
  name: Service['icon'];
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.75} />;
}
