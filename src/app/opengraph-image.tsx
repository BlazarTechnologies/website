import { ImageResponse } from "next/og";
import { Icon } from "@/components/icon";

export const alt = "Blazar Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          background: "radial-gradient(circle at 50% 40%, #1a1a2e 0%, #07070b 70%)",
          color: "#fff",
        }}
      >
        <Icon width={220} height={220} />
        <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: -2 }}>
          Blazar Technologies
        </div>
      </div>
    ),
    size,
  );
}
