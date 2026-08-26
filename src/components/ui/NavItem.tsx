import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

// Links com # (ex.: "/#sobre") usam <a> nativa — garante o scroll até a
// seção mesmo vindo de outra página. Rotas de verdade ("/blog") usam
// <Link> pra navegação client-side.
export default function NavItem({ href, label, className, onClick }: NavItemProps) {
  if (href.includes("#")) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}
