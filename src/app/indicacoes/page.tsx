import type { Metadata } from "next";
import { books } from "@/lib/content";

export const metadata: Metadata = {
  title: "Indicações de leitura — Maiara Pereira de Souza",
  description: "Livros indicados para pais, adolescentes e profissionais da psicologia.",
};

export default function Indicacoes() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-6 py-20">
      <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">
        Indicações de leitura
      </p>
      <h1 className="mb-10 mt-2.5 font-display text-[clamp(30px,4vw,42px)] font-medium tracking-tight text-text">
        Livros que costumo indicar
      </h1>

      <div className="grid gap-5 sm:grid-cols-2">
        {books.map((book, i) => (
          <div key={i} className="rounded-card bg-white p-7">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">
              {book.audience}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-text">{book.title}</h2>
            <p className="text-sm text-text-soft">{book.author}</p>
            <p className="mt-3 text-[15px] text-text-soft">{book.note}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
