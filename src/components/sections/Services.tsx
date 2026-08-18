import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="atendimentos" className="py-[76px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          eyebrow="Áreas de atendimento"
          title="Como posso ajudar?"
          description="Estas são algumas frentes de trabalho mais comuns — substitua pelas áreas reais de atuação."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
