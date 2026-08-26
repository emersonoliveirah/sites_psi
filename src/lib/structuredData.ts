import { siteConfig } from "@/lib/content";

// Schema.org "Psychologist" — subtipo de MedicalBusiness, o tipo correto para
// este caso de uso (ver https://schema.org/Psychologist).
// Nenhum campo aqui deve ser preenchido com dado que não veio do currículo/CV real —
// evite adicionar horário de funcionamento, avaliações ou faixa de preço fictícios.
export const psychologistSchema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: siteConfig.name,
  image: `${siteConfig.siteUrl}/images/maiara-foto.jpg`,
  url: siteConfig.siteUrl,
  telephone: "+5561992450943",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brasília",
    addressRegion: "DF",
    addressCountry: "BR",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "CRP",
    value: siteConfig.crp,
  },
};
