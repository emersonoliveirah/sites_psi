import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  return (
    <section className="py-16 md:py-[88px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">
            Psicoterapia individual
          </p>
          <h1 className="mt-3.5 font-display text-[clamp(34px,5.4vw,58px)] font-medium leading-[1.15] tracking-tight text-text">
            Um espaço para se ouvir com calma.
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-text-soft">
            Psicoterapia acolhedora para compreender suas emoções, pensamentos e experiências com
            mais cuidado — em um ritmo que respeita o seu.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button 
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer">Agendar atendimento</Button>
            <a href="#como-funciona" className="text-[15px] font-semibold text-sage-deep">
              Como funciona a primeira sessão →
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-2.5 text-sm text-text-soft">
            <span>{siteConfig.name}</span>
            <span className="h-1 w-1 rounded-full bg-sage" />
            <span>CRP {siteConfig.crp}</span>
            <span className="h-1 w-1 rounded-full bg-sage" />
            <span>Atendimento presencial em {siteConfig.city} e por vídeo</span>
          </div>
        </div>

        <div className="relative aspect-[3/4] overflow-hidden rounded-panel bg-sage-tint">
          <Image
            src="/images/maiara-foto.jpg"
            alt={siteConfig.name}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 860px) 40vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
