import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trama Branding | Estratégia, Marca e Crescimento",
  description:
    "A Trama Branding conecta estratégia, posicionamento, comunicação, tecnologia e dados para construir marcas preparadas para crescer.",
  keywords: [
    "Trama Branding",
    "branding",
    "estratégia",
    "marketing digital",
    "posicionamento",
    "social media",
    "automação",
    "dados",
    "tecnologia",
  ],
  authors: [{ name: "Trama Branding" }],
  creator: "Trama Branding",
  publisher: "Trama Branding",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Trama Branding | Estratégia, Marca e Crescimento",
    description:
      "Estratégia, branding, comunicação, tecnologia e dados trabalhando juntos para fazer negócios crescerem.",
    type: "website",
    locale: "pt_BR",
    siteName: "Trama Branding",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}