import { drawDP } from "../utils/drawDp";

export default function DownloadButton({ image }) {
  async function handleDownload() {
    const canvas = document.createElement("canvas");

    await drawDP(canvas, image, 2048);

    const link = document.createElement("a");

    link.download = "campaign-dp.png";

    link.href = canvas.toDataURL("image/png");

    link.click();
  }

  return (
    <button
      onClick={handleDownload}
      style={{
        marginTop: "30px",
        background: "#16a34a",
        color: "#fff",
        padding: "14px 30px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Download DP
    </button>
  );
}