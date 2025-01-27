import React from "react";

const ImagesAbove = ({
  title,
  generalDescription, // New prop for overall description
  publicationData,
  imageClassName,
  contentClassName,
}) => {
  return (
    <div className="images-above mt-12">
      <h2 className="text-4xl font-bold text-text-dark mb-4">{title}</h2>
      {generalDescription && (
        <p className="text-lg text-text-light mb-6">{generalDescription}</p>
      )}
      <div className="grid grid-cols-4 items-center">
        {publicationData.map((image, index) => (
          <div
            key={index}
            className={`image ${imageClassName} flex flex-col justify-center items-center`}
          >
            <img src={image.imageSrc} alt={`Image ${index + 1}`} />
            <div className="mt-6">
              <p className="text-base mb-4">{image.description}</p>
              {image.link && (
                <a
                  href={image.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more...
                </a>
              )}
              <div className={`aside-content ${contentClassName}`}>
                {image.customContent}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesAbove;
