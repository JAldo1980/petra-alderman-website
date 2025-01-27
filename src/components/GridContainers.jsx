import React from "react";

const GridContainers = () => {
  return (
    <div className="grid gap-6 w-full max-w-[400px] rounded-lg cursor-pointer shadow-md p-2 hover:shadow-sm delay-75 ease-in-out  md:grid-col-2 ">
      <div>
        <h3>Teaching</h3>
        <img src="/placeholder-Image.png" alt="teaching image" />
      </div>
      <div>
        <h3>Podcasts</h3>
        <img src="/placeholder-Image.png" alt="podcast image" />
      </div>
      <div>
        <h3>Media</h3>
        <img src="/placeholder-Image.png" alt="media image" />
      </div>
      <div>
        <h3>Events</h3>
        <img src="/placeholder-Image.png" alt="events image" />
      </div>
    </div>
  );
};

export default GridContainers;
