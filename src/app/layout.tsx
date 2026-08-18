import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
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
  title: "Maiara Pereira de Souza — Psicóloga em Brasília, DF",
  description:
    "Psicoterapia infantojuvenil, individual e em grupo, com foco em habilidades sociais e orientação a pais e escola. Atendimento em Brasília, DF.",
  openGraph: {
    title: "Maiara Pereira de Souza — Psicóloga em Brasília, DF",
    description:
      "Psicoterapia infantojuvenil, individual e em grupo, com foco em habilidades sociais e orientação a pais e escola.",
    url: "https://[dominio].com.br",
    siteName: "Maiara Pereira de Souza",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
