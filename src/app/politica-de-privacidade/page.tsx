import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Maiara Pereira de Souza",
};

export default function PrivacyPolicy() {
  return (
    <main id="main" className="mx-auto max-w-[720px] px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-sage-deep">
        ← Voltar para o início
      </Link>
      <h1 className="mb-6 mt-4 font-display text-3xl font-medium text-text">
        Política de Privacidade
      </h1>
      <p className="text-text-soft">
        [Conteúdo a definir com apoio jurídico — descreva quais dados são coletados pelo site
        (ex.: formulário de contato, WhatsApp), com qual finalidade, por quanto tempo são
        mantidos, e como a pessoa pode solicitar exclusão, conforme a LGPD (Lei 13.709/2018).
        Evite coletar dados de saúde sensíveis diretamente pelo site.]
      </p>
    </main>
  );
}
