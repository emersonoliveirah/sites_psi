import { KidsIcon, GrowthIcon, GuidanceIcon } from "@/components/icons";
import type { Service } from "@/types";

const iconMap = {
  child: KidsIcon,
  growth: GrowthIcon,
  guidance: GuidanceIcon,
};

export default function ServiceCard({ icon, title, description }: Service) {
  const Icon = iconMap[icon];
  return (
    <div className="rounded-card bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-18px_rgba(38,38,32,0.35)]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sage-tint text-sage-deep">
        <Icon />
      </div>
      <h3 className="mb-2.5 text-[19px] font-semibold text-text">{title}</h3>
      <p className="text-[15px] text-text-soft">{description}</p>
    </div>
  );
}
