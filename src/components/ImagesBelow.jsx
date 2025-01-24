import React from "react";

const ImagesBelow = ({
  title,
  description,
  images,
  imageClassName,
  contentClassName,
  children,
}) => {
  return (
    <div className="images-below">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-base mb-6">{description}</p>
      <div className={`aside-content ${contentClassName}`}>{children}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className={`image ${imageClassName} flex justify-center items-center`}
          >
            <img src={imageSrc} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="mt-6"></div>
    </div>
  );
};

export default ImagesBelow;
