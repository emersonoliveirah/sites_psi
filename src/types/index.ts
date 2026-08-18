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
