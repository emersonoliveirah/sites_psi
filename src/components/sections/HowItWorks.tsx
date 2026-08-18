import SectionHeading from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-[76px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading eyebrow="Como funciona" title="Um começo simples." className="mb-12" />
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-sage-tint font-display text-[15px] font-semibold text-sage-deep">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text">{step.title}</h3>
              <p className="text-[15px] text-text-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
