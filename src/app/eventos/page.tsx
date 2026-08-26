import type { Metadata } from "next";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eventos e atividades — Maiara Pereira de Souza",
  description: "Participações em congressos, seminários e atividades de psicologia.",
};

export default function Eventos() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-6 py-20">
      <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">
        Eventos e atividades
      </p>
      <h1 className="mb-10 mt-2.5 font-display text-[clamp(30px,4vw,42px)] font-medium tracking-tight text-text">
        Participações recentes
      </h1>

      <ul className="flex flex-col">
        {events.map((event, i) => (
          <li key={i} className="border-b border-text/10 py-7 first:border-t">
            <span className="text-sm font-semibold text-sage-deep">{event.year}</span>
            <h2 className="mt-1.5 font-display text-xl font-medium text-text">{event.title}</h2>
            <p className="mt-2 text-[15px] text-text-soft">{event.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
