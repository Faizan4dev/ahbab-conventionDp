import { useRef, useState } from "react";

import UploadButton from "./components/UploadButton";
import PreviewCanvas from "./components/PreviewCanvas";
import DownloadButton from "./components/DownloadButton";

import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  // Preview canvas
  const previewCanvasRef = useRef(null);

  return (
    <div className="app">

      <h1>Ahbab Convention 2026</h1>

      <p>
        Upload your picture and download your DP.
      </p>
      <p>
        
      </p>

      <UploadButton setImage={setImage} />

      <PreviewCanvas
        image={image}
        canvasRef={previewCanvasRef}
      />
      <p className="text-red-500">If image isn't generated correctly, upload any image with face focued</p>
      {image && (
        <DownloadButton image={image} />
      )}

    </div>
  );
}

export default App;