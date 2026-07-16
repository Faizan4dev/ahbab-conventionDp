import { useState } from "react";
import { drawDP } from "../utils/drawDP";

export default function DownloadButton({ image }) {

  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {

    if (isDownloading) return;

    setIsDownloading(true);

    try {

      const canvas = document.createElement("canvas");

      await drawDP(canvas, image, 2048);

      const link = document.createElement("a");

      link.download = "campaign-dp.png";

      link.href = canvas.toDataURL("image/png");

      link.click();

    } finally {

      setTimeout(() => {
        setIsDownloading(false);
      }, 500);

    }

  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      style={{
        marginTop: "30px",
        background: isDownloading ? "#94a3b8" : "#16a34a",
        color: "#fff",
        padding: "14px 30px",
        borderRadius: "10px",
        border: "none",
        cursor: isDownloading ? "not-allowed" : "pointer",
        fontSize: "16px",
        opacity: isDownloading ? 0.8 : 1,
        transition: "all .2s"
      }}
    >
      {isDownloading ? "⏳ Preparing Download..." : "⬇ Download DP"}
    </button>
  );
}