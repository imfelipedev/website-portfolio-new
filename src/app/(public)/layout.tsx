import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import Header from "@/app/components/header";

import Footer from "@/app/components/footer";

import "@/app/styles/globals.css";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfólio ・ Felipe Augusto",
    description: "Desenvolvedor Full-Stack",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-br">
            <body className={poppins.className}>
                <main className="max-w-full overflow-x-hidden">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
