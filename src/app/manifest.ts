import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Psicóloga`,
    short_name: "Maiara Psicóloga",
    description: `Psicoterapia infantojuvenil e adulta em ${siteConfig.city}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#F5F4EE",
    theme_color: "#48583F",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
