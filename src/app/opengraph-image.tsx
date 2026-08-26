import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const alt = "Maiara Pereira de Souza — Psicóloga em Brasília, DF";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#F5F4EE",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#48583F",
          }}
        >
          Psicoterapia infantojuvenil e adulta
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 500,
            color: "#262620",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#5B5B52", marginTop: 20 }}>
          CRP {siteConfig.crp} · {siteConfig.city}
        </div>
      </div>
    ),
    { ...size }
  );
}
