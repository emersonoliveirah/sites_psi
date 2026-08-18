"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-off-white/90 shadow-[0_1px_0_rgba(38,38,32,0.07)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-5">
        <Link href="#" className="font-display text-[19px] font-medium tracking-wide text-text">
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-9 text-[15px] font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-text-soft transition-colors hover:text-sage-deep">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button 
        href={siteConfig.whatsappUrl} 
        size="sm" 
        className="hidden md:inline-flex"
        target="_blank"
        rel="noopener noreferrer">
          Agendar horário
        </Button>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-text hover:bg-sand-light md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-off-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 pb-7 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-text"
            >
              {link.label}
            </Link>
          ))}
          <Button 
          href={siteConfig.whatsappUrl} 
          onClick={() => setOpen(false)}
          target="_blank"
          rel="noopener noreferrer">
            Agendar horário
          </Button>
        </div>
      </div>
    </header>
  );
}
