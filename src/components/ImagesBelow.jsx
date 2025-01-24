import React from "react";

const ImagesBelow = ({
  title,
  description,
  images,
  buttonText,
  imageClassName,
  contentClassName,
  children,
}) => {
  return (
    <div className="images-below p-5 text-center">
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
      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImagesBelow;
