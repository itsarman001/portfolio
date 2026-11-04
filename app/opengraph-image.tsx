import { ImageResponse } from "next/og";
import { about } from "@/data/about";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${about.name} | ${about.role}`;

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
          padding: 80,
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: "-0.02em" }}>
          {about.name}
        </div>
        <div style={{ fontSize: 40, marginTop: 16, opacity: 0.8 }}>
          {about.role}
        </div>
      </div>
    ),
    size,
  );
}
