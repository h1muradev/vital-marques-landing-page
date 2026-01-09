import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vital & Marques Assessoria Contábil | Contabilidade Premium e Estratégica",
  description:
    "Contabilidade moderna para MEIs, empresas e profissionais em Valparaíso de Goiás, Brasília e online. Segurança fiscal, processos claros e atendimento consultivo.",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
