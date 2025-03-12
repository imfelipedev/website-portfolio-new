import Link from "next/link";

export default function Header() {
    return (
        <header className="p-8 fixed left-0 top-0 w-full border-b-[0.1rem] border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center z-50">
            <div className="max-w-[70%] w-full flex items-center justify-between">
                <Link href="#home" className="text-[1.6rem] text-[#fafafa] font-medium">
                    Portfolio
                </Link>

                <div className="flex item-center justify-end gap-10">
                    <Link href="#about" className="text-[1.4rem] text-[#fafafa/80">
                        Sobre
                    </Link>

                    <Link href="#experience" className="text-[1.4rem] text-[#fafafa/80">
                        Experiências
                    </Link>

                    <Link href="#project" className="text-[1.4rem] text-[#fafafa/80">
                        Projetos
                    </Link>

                    <Link href="#contact" className="text-[1.4rem] text-[#fafafa/80">
                        Contatos
                    </Link>
                </div>
            </div>
        </header>
    );
}
