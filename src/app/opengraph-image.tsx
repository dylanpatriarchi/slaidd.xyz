import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Slaidd: Parla. Le Slide Ti Seguono.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const interBlack = await fetch(
    "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfMZhrib2Bg-4.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              background: "#000",
              borderRadius: "0",
            }}
          />
          <span
            style={{
              fontWeight: 900,
              fontSize: "18px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#000",
            }}
          >
            SLAIDD
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            lineHeight: "0.88",
          }}
        >
          {["PARLA.", "LE SLIDE", "TI SEGUONO."].map((line) => (
            <span
              key={line}
              style={{
                fontWeight: 900,
                fontSize: "148px",
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "#000",
                display: "block",
              }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000",
              opacity: 0.4,
            }}
          >
            APP DESKTOP IA · IN TEMPO REALE
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000",
              opacity: 0.4,
            }}
          >
            slaidd.xyz
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBlack,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
