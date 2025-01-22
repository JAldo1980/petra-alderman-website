// src/pages/Home.jsx
import React from "react";
import ImageAside from "../components/ImageAside";
import Container from "../components/Container";

const Home = () => {
  return (
    <div className="bg-bg-1 py-8">
      <Container>
        <ImageAside
          imageSrc="public/petra_hero.png"
          altText="Petra Alderman"
          imageClassName="w-full"
          //   contentClassName="flex flex-col justify-between gap-12"
        >
          <div className="flex flex-col justify-between gap-14">
            <div>
              <h2 className="text-4xl font-bold text-text-dark ">
                "A Thai Scholar of Significant Relevance"
              </h2>
            </div>
            <div>
              <p className="text-text-orange font-bold">
                Academic | Researcher | Policy Advisor | Author
              </p>
            </div>
          </div>
        </ImageAside>
      </Container>
    </div>
  );
};

export default Home;
