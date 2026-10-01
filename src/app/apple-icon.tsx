import { ImageResponse } from "next/og";
import { Icon } from "@/components/icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07070b",
          color: "#fff",
        }}
      >
        <Icon width={140} height={140} />
      </div>
    ),
    size,
  );
}
