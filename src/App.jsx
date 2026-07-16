import { useRef, useState } from "react";

import UploadButton from "./components/UploadButton";
import PreviewCanvas from "./components/PreviewCanvas";
import DownloadButton from "./components/DownloadButton";

import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const previewCanvasRef = useRef(null);

  return (
    <div className="app">

      <h1>Ahbab Convention 2026</h1>

      <p>
        Upload your picture and download your DP.
      </p>

      <UploadButton
        setImage={setImage}
        setIsGenerating={setIsGenerating}
      />

      {isGenerating && (
        <div className="status">
          ⏳ Generating your DP...
        </div>
      )}

      <PreviewCanvas
        image={image}
        canvasRef={previewCanvasRef}
        setIsGenerating={setIsGenerating}
      />

      <p className="text-red-500">
        If image isn't generated correctly, upload an image with the face clearly visible.
      </p>

      {image && !isGenerating && (
        <DownloadButton image={image} />
      )}

    </div>
  );
}

export default App;