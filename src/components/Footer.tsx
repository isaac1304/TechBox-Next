import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full border-top border-white/10 bg-[#0f1538]/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm">
                <div className="flex items-center gap-3">
                    <Image src="/brand/techbox-mark.png" alt="TechBox" width={40} height={40} className="h-10 w-10" />
                    <span className="text-[var(--text-main)]">© {new Date().getFullYear()} TechBox</span>
                </div>
                <span className="text-xs text-white/40">Hecho con Next.js</span>
            </div>
        </footer>
    );
}
