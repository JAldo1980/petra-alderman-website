// src/components/ImageAside.jsx
import React from "react";

const ImageAside = ({
  imageSrc,
  altText,
  children,
  imageClassName,
  contentClassName,
}) => {
  return (
    <div className="image-aside grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className={`aside-content ${contentClassName}`}>{children}</div>
      <div className={`image ${imageClassName}`}>
        <img src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

export default ImageAside;
