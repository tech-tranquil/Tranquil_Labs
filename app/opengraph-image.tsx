import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tranquil Labs — AI Product Development & Software Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Teal glow top-left */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,212,191,0.18) 0%, transparent 65%)",
            top: -250,
            left: -150,
            display: "flex",
          }}
        />
        {/* Lavender glow bottom-right */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 65%)",
            bottom: -200,
            right: -100,
            display: "flex",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(45,212,191,0.08)",
            border: "1px solid rgba(45,212,191,0.25)",
            borderRadius: 100,
            padding: "6px 18px",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2dd4bf",
              marginRight: 10,
              display: "flex",
            }}
          />
          <span style={{ color: "#2dd4bf", fontSize: 15, fontWeight: 500 }}>
            AI Innovation Studio
          </span>
        </div>

        {/* Logo + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "linear-gradient(135deg, #2dd4bf 0%, #a78bfa 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 22,
              fontSize: 26,
              fontWeight: 800,
              color: "white",
            }}
          >
            TL
          </div>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Tranquil Labs
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: 680,
            lineHeight: 1.45,
            marginBottom: 52,
          }}
        >
          AI Product Development &amp; Software Consultancy
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", gap: 14 }}>
          {[
            "Build AI Products",
            "Ship MVPs Fast",
            "Scale Platforms",
            "Technical Consulting",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "9px 22px",
                color: "rgba(255,255,255,0.7)",
                fontSize: 15,
                fontWeight: 500,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            color: "rgba(255,255,255,0.2)",
            fontSize: 15,
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          tranquillabs.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
