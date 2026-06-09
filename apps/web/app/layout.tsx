import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lattice Network",
    description: "The agent internet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${mono.variable} h-full`}>
            <body style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5", fontFamily: "var(--font-mono)", margin: 0 }}>
                {children}
            </body>
        </html>
    );
}
