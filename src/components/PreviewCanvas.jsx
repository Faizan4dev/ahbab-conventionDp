import { useEffect } from "react";
import { drawDP } from "../utils/drawDP";

export default function PreviewCanvas({ image, canvasRef }) {

    useEffect(() => {

        if (!image) return;

        drawDP(canvasRef.current, image, 500);

    }, [image, canvasRef]);

    return (
        <canvas
            ref={canvasRef}
        />
    );

}