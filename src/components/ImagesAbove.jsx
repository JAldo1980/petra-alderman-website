import React from "react";

const ImagesAbove = ({
  title,
  generalDescription,
  publicationData,
  imageClassName,
  contentClassName,
}) => {
  return (
    <div className="images-above mt-12 px-4">
      <h2 className="text-4xl font-bold text-text-dark mb-4">{title}</h2>
      {generalDescription && (
        <p className="text-lg text-text-dark mb-6">{generalDescription}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {publicationData.map((image, index) => (
          <div
            key={index}
            className={`image ${imageClassName} flex flex-col justify-center items-center text-center`}
          >
            <img
              src={image.imageSrc}
              alt={`Image ${index + 1}`}
              className="w-full max-w-[200px] rounded-lg cursor-pointer shadow-md p-2 hover:shadow-sm delay-75 ease-in-out"
            />
            <div className="mt-6">
              <p className="text-start text-text-dark my-4">
                {image.description}
              </p>
              {image.link && (
                <div className="text-start">
                  {" "}
                  <a
                    href={image.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more...
                  </a>
                </div>
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
