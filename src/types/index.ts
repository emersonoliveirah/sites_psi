export type ServiceIcon = "child" | "growth" | "guidance";

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export interface BookRecommendation {
  title: string;
  author: string;
  audience: string;
  note: string;
}

export interface EventItem {
  year: string;
  title: string;
  description: string;
}
