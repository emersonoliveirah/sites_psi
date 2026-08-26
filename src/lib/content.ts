import type { Service, Step, FaqItem, NavLink, BookRecommendation, EventItem } from "@/types";

export const siteConfig = {
  name: "Maiara Pereira de Souza",
  crp: "01/26806",
  whatsappUrl:
    "https://wa.me/5561992450943?text=" +
    encodeURIComponent("Olá! Vi o site e gostaria de agendar uma consulta."),
  city: "Brasília, DF",
  // TODO: trocar pelo domínio real assim que estiver ativo na Vercel
  siteUrl: "https://dominio-a-definir.com.br",
};

export const navLinks: NavLink[] = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#atendimentos", label: "Atendimentos" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

export const services: Service[] = [
  {
    icon: "child",
    title: "Psicoterapia infantil",
    description:
      "Atendimento individual e em grupo para crianças, com foco no desenvolvimento de habilidades sociais e emocionais.",
  },
  {
    icon: "growth",
    title: "Adolescentes e adultos",
    description:
      "Acompanhamento psicoterapêutico para adolescentes e adultos, com abordagem cognitivo-comportamental.",
  },
  {
    icon: "guidance",
    title: "Orientação a pais e escola",
    description:
      "Aplicação de escalas, visita escolar e orientação para pais e professores no acompanhamento do desenvolvimento infantil.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Primeiro contato",
    description: "Você entra em contato pelo WhatsApp.",
  },
  {
    number: "02",
    title: "Agendamento",
    description: "Combinamos juntas o melhor horário e formato de atendimento.",
  },
  {
    number: "03",
    title: "Primeira sessão",
    description: "Um espaço inicial para nos conhecermos e entender sua demanda.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "É um momento de acolhimento, sem compromisso com técnicas específicas — o objetivo é entender a demanda (sua ou de seu filho/filha) e explicar como funciona o processo.",
  },
  {
    question: "A psicóloga atende crianças e adolescentes?",
    answer:
      "Sim — o atendimento infantojuvenil é feito individualmente ou em grupo, com foco no desenvolvimento de habilidades sociais e emocionais.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim, os atendimentos também acontecem por videochamada, com a mesma confidencialidade do presencial.",
  },
  {
    question: "Os pais participam do processo terapêutico infantil?",
    answer:
      "Sim. O acompanhamento inclui orientação para pais e professores e, quando necessário, articulação com a escola.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer: "[Definir duração padrão, ex.: 50 minutos, com frequência semanal.]",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Basta enviar uma mensagem pelo WhatsApp — o retorno costuma acontecer em até [1 dia útil].",
  },
];

// TODO: trocar pelas indicações reais dela — estes são só placeholders de estrutura
export const books: BookRecommendation[] = [
  {
    title: "[Título do livro]",
    author: "[Autor/a]",
    audience: "Para pais",
    note: "[Por que você recomenda este livro]",
  },
  {
    title: "[Título do livro]",
    author: "[Autor/a]",
    audience: "Para profissionais",
    note: "[Por que você recomenda este livro]",
  },
  {
    title: "[Título do livro]",
    author: "[Autor/a]",
    audience: "Para adolescentes",
    note: "[Por que você recomenda este livro]",
  },
];

// Atividades reais, extraídas do currículo Lattes dela
export const events: EventItem[] = [
  {
    year: "2026",
    title: "Mediação de debate no Cine ComClin",
    description:
      "Condução de debate sobre o filme 'A Natureza das Coisas Invisíveis', a partir da obra audiovisual.",
  },
  {
    year: "2026",
    title: "VII Congresso Online Internacional: Boas Práticas em Saúde Mental",
    description:
      "Apresentação de relato de experiência sobre cine-debate e clínica, em coautoria, no evento promovido pelo CENAT.",
  },
  {
    year: "2026",
    title: "Dia do Meio Ambiente: mudanças climáticas e saúde mental",
    description: "Participação em bate-papo sobre a relação entre mudanças climáticas e saúde mental.",
  },
];
