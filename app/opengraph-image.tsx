import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020410 0%, #0a0d2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
          }}
        >
          PayTrinity
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#D4A574",
            maxWidth: 700,
            textAlign: "center",
          }}
        >
          Start, manage, and grow your US business
        </div>
      </div>
    ),
    { ...size },
  );
}
