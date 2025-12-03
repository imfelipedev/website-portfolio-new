import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "@/app/styles/globals.css";

import Theme from "@/app/components/theme";

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
        <html lang="pt-br" suppressHydrationWarning>
            <Theme />
            <body className={poppins.className}>
                <main className="max-w-full overflow-x-hidden">{children}</main>
            </body>
        </html>
    );
}
