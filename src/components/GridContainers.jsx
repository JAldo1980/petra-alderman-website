import React from "react";

const GridContainers = () => {
  return (
    <div
      className="grid gap-6 w-full rounded-lg
      md:grid-cols-2 
      sm:grid-cols-1 
      grid-cols-1"
    >
      <div>
        <h3 className="text-2xl font-bold text-headline-2">Teaching</h3>
        <a href="/teaching">
          <img
            src="/teaching-petra-alderman.png"
            alt="teaching image"
            className="cursor-pointer shadow-md p-2 hover:shadow-sm delay-75 ease-in-out mt-4"
          />
        </a>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-headline-2">Podcasts</h3>
        <a href="/podcasts">
          <img
            src="/podcast-placeholder.png"
            alt="podcast image"
            className="cursor-pointer shadow-md p-2 hover:shadow-sm delay-75 ease-in-out mt-4"
          />
        </a>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-headline-2">Media</h3>
        <a href="/media">
          <img
            src="/media-petra-alderman.png"
            alt="media image"
            className="cursor-pointer shadow-md p-2 hover:shadow-sm delay-75 ease-in-out mt-4"
          />
        </a>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-headline-2">Events</h3>
        <a href="/events">
          <img
            src="/events-petra-alderman.png"
            alt="events image"
            className="cursor-pointer shadow-md p-2 hover:shadow-sm delay-75 ease-in-out mt-4"
          />
        </a>
      </div>
    </div>
  );
};

export default GridContainers;
