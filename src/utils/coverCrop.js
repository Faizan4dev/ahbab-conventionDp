export function getCoverCrop(imgWidth, imgHeight, targetWidth, targetHeight) {
  const imageRatio = imgWidth / imgHeight;
  const targetRatio = targetWidth / targetHeight;

  let sx = 0;
  let sy = 0;

  let sWidth = imgWidth;
  let sHeight = imgHeight;

  if (imageRatio > targetRatio) {
    sWidth = imgHeight * targetRatio;
    sx = (imgWidth - sWidth) / 2;
  } else {
    sHeight = imgWidth / targetRatio;
    sy = (imgHeight - sHeight) / 2;
  }

  return {
    sx,
    sy,
    sWidth,
    sHeight,
  };
}
