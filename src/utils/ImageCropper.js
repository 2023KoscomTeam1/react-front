import React, { useState } from "react";

function ImageCropper({ imageUrl }) {
  const [croppedImage, setCroppedImage] = useState("");

  const handleCrop = () => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = Math.min(img.width, img.height);

      canvas.width = size;
      canvas.height = size;

      const context = canvas.getContext("2d");
      context.drawImage(
        img,
        (img.width - size) / 2,
        (img.height - size) / 2,
        size,
        size,
        0,
        0,
        size,
        size
      );

      setCroppedImage(canvas.toDataURL("image/jpeg"));
    };
  };

  return (
    <div>
      <div className="image-container">
        <img src={imageUrl} alt="Original" />
      </div>
      <button onClick={handleCrop}>Crop to Square</button>
      {croppedImage && (
        <div className="image-container">
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
}

export default ImageCropper;
