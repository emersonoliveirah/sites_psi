import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "ghost" | "onDark";
type ButtonSize = "default" | "sm";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  id?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-sage-deep text-white hover:bg-sage",
  ghost: "bg-transparent text-text border border-text/20 hover:border-sage-deep hover:text-sage-deep",
  onDark: "bg-white text-sage-deep hover:bg-sand-light",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-7 py-3.5 text-[15px]",
  sm: "px-5 py-2.5 text-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  id,
  target,
  rel,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      id={id}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-150 hover:-translate-y-0.5 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
