import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-text py-14 text-white/75">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-9 flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl text-white">{siteConfig.name}</p>
            <p className="mt-1.5 text-sm">Psicóloga · CRP {siteConfig.crp}</p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 block text-sm hover:text-white"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[13px]">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </span>
          <span>Este site não substitui atendimento de urgência ou emergência.</span>
        </div>
      </div>
    </footer>
  );
}
