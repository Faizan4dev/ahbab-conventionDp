import frame from "../assets/frame.png";
import { getCoverCrop } from "./coverCrop";

const ORIGINAL_SIZE = 2048;

// These are measured from your actual frame.png
const PHOTO = {
  x: 656,
  y: 494,

  width: 735,
  height: 733,
};

export async function drawDP(canvas, imageSrc, outputSize = 500) {
  const ctx = canvas.getContext("2d");

  canvas.width = outputSize;
  canvas.height = outputSize;

  ctx.clearRect(0, 0, outputSize, outputSize);

  // ---------- Load User Image ----------

  const userImage = await loadImage(imageSrc);

  // ---------- Load Frame ----------

  const frameImage = await loadImage(frame);

  // ---------- Scale Coordinates ----------

  const scale = outputSize / ORIGINAL_SIZE;

  const x = PHOTO.x * scale;
  const y = PHOTO.y * scale;

  const w = PHOTO.width * scale;
  const h = PHOTO.height * scale;

  // ---------- Circle ----------

  ctx.save();

  ctx.beginPath();

  ctx.arc(
    x + w / 2,

    y + h / 2,

    w / 2,

    0,

    Math.PI * 2,
  );

  ctx.closePath();

  ctx.clip();

  // ---------- Crop ----------

  const crop = getCoverCrop(
    userImage.width,

    userImage.height,

    w,

    h,
  );

  ctx.drawImage(
    userImage,

    crop.sx,
    crop.sy,
    crop.sWidth,
    crop.sHeight,

    x,
    y,
    w,
    h,
  );

  ctx.restore();

  // ---------- Draw Frame ----------

  ctx.drawImage(
    frameImage,

    0,
    0,

    outputSize,
    outputSize,
  );
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve(img);

    img.src = src;
  });
}
