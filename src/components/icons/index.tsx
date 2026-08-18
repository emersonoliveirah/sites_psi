type IconProps = { className?: string };

export function KidsIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="10.5" width="7" height="7" rx="1.2" />
      <rect x="14" y="10.5" width="7" height="7" rx="1.2" />
      <rect x="8.5" y="3" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function GrowthIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="19" x2="5" y2="13" />
      <line x1="12" y1="19" x2="12" y2="8" />
      <line x1="19" y1="19" x2="19" y2="4" />
    </svg>
  );
}

export function GuidanceIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5.5c2-1 4.5-1 8 .5 3.5-1.5 6-1.5 8-.5v13c-2-1-4.5-1-8 .5-3.5-1.5-6-1.5-8-.5Z" />
      <path d="M12 6v13" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.62 1.4 5.12L2 22l5.13-1.35a9.85 9.85 0 0 0 4.91 1.32h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.83-.12a16.7 16.7 0 0 1-1.66-.62c-2.93-1.27-4.84-4.23-4.99-4.43-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37h.57c.18 0 .43-.03.66.5.24.56.8 1.94.87 2.08.07.15.11.32.02.51-.09.2-.14.32-.27.5-.14.17-.29.39-.42.52-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.17-.2.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.62.77 1.9.91.28.14.46.21.53.32.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}
