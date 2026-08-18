import Button from "@/components/ui/Button";
import { PlusIcon } from "@/components/icons";
import { faqItems, siteConfig } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="py-[76px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-6 md:grid-cols-[1.3fr_0.9fr]">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">
            Perguntas frequentes
          </p>
          <h2 className="mb-7 mt-2.5 font-display text-[clamp(24px,3vw,32px)] font-medium tracking-tight text-text">
            Tire suas dúvidas
          </h2>

          {faqItems.map((item, i) => (
            <details
              key={item.question}
              open={i === 0}
              className="group border-b border-text/10 py-[18px] first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-sage-tint text-sage-deep transition-transform duration-200 group-open:rotate-45">
                  <PlusIcon className="h-3.5 w-3.5" />
                </span>
              </summary>
              <p className="mt-3.5 max-w-[56ch] text-[15px] text-text-soft">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="h-fit rounded-panel bg-sage-deep p-9 text-white">
          <h3 className="mb-3 font-display text-2xl font-medium">Vamos conversar?</h3>
          <p className="mb-6 text-[15px] text-white/80">
            O primeiro passo começa com uma mensagem. Chame no WhatsApp e combinamos o melhor
            horário.
          </p>
          <Button
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contato"
            variant="onDark"
          >
            Agendar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
