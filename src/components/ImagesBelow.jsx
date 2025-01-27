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
      <h2 className="text-4xl font-bold text-text-dark mb-4">{title}</h2>
      <p className="text-base text-text-dark mb-6">{description}</p>
      <div className={`aside-content ${contentClassName}`}>{children}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className={`image ${imageClassName} flex justify-center items-center`}
          >
            <img src={imageSrc} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesBelow;
