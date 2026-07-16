import { useEffect } from "react";
import { drawDP } from "../utils/drawDP";

export default function PreviewCanvas({
    image,
    canvasRef,
    setIsGenerating
}) {

    useEffect(() => {

        if (!image) return;

        async function generate(){

            await drawDP(
                canvasRef.current,
                image,
                500
            );

            setIsGenerating(false);

        }

        generate();

    }, [image]);

    return (
        <canvas
            ref={canvasRef}
        />
    );

}