import { ImageResponse } from "next/og";

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Petzy
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}