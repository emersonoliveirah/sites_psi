import type { Metadata, Viewport } from "next";
import { Fraunces, Karla } from "next/font/google";
import { siteConfig } from "@/lib/content";
import { psychologistSchema } from "@/lib/structuredData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fraunces",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Maiara Pereira de Souza — Psicóloga em Brasília, DF",
  description:
    "Psicoterapia infantojuvenil, individual e em grupo, com foco em habilidades sociais e orientação a pais e escola. Atendimento em Brasília, DF.",
  openGraph: {
    title: "Maiara Pereira de Souza — Psicóloga em Brasília, DF",
    description:
      "Psicoterapia infantojuvenil, individual e em grupo, com foco em habilidades sociais e orientação a pais e escola.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#48583F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        
        {/* Wrapper flex-1 adicionado para expandir o conteúdo e empurrar o footer */}
        <div className="flex-1">
          {children}
        </div>
        
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(psychologistSchema) }}
        />
      </body>
    </html>
  );
}