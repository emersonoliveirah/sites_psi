import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";

export default function About() {
  return (
    <section id="sobre" className="bg-sand-light py-[76px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-11 px-6 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-sage-tint">
          <Image
            src="/images/maiara-foto.jpg"
            alt={siteConfig.name}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 860px) 35vw, 90vw"
          />
        </div>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">Sobre mim</p>
          <h2 className="mb-4 mt-2.5 font-display text-[clamp(24px,3.2vw,32px)] font-medium tracking-tight text-text">
            Cada história merece ser escutada com cuidado.
          </h2>
          <p className="mb-5 text-base text-text-soft">
            Psicóloga graduada pelo Centro Universitário do Distrito Federal (UDF), atualmente em
            formação em Terapia Cognitivo-Comportamental pelo Child Behavior Institute of Miami.
            Atua na área clínica com experiência em atendimento infantojuvenil, individual e em
            grupo, com foco no desenvolvimento de habilidades sociais.
          </p>
          <ul className="mb-7 grid gap-3">
            <li className="text-[15px] text-text">
              <strong className="font-semibold">Formação:</strong> Psicologia — UDF
            </li>
            <li className="text-[15px] text-text">
              <strong className="font-semibold">Abordagem:</strong> Terapia
              Cognitivo-Comportamental (em formação)
            </li>
            <li className="text-[15px] text-text">
              <strong className="font-semibold">CRP:</strong> {siteConfig.crp}
            </li>
            <li className="text-[15px] text-text">
              <strong className="font-semibold">Atuação:</strong> Comissão Especial de Psicologia
              Clínica — CRP/DF
            </li>
          </ul>
          <Button
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
          >
            Falar com a psicóloga
          </Button>
        </div>
      </div>
    </section>
  );
}
