import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-sage-deep text-white shadow-[0_10px_24px_-8px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  );
}
