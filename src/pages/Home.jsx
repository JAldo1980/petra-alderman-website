// src/pages/Home.jsx
import React from "react";
import ImageAside from "../components/ImageAside";
import Container from "../components/Container";

const Home = () => {
  return (
    <>
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
      <div className="bg-bg-2 py-8">
        <Container>
          <ImageAside
            imageSrc="public/petra_book 1.png"
            altText="Petra Alderman"
            imageClassName="w-2/3 md:order-1"
            contentClassName="md:order-2"
          >
            <div className="flex flex-col justify-between gap-6">
              <h3 className="text-2xl font-bold text-headline-1">
                Buy Petra's book:
              </h3>
              <p className="text-text-orange">
                Branding Authoritarian Nations: Political Legitimation and
                Strategic National Myths in Military-Ruled Thailand.
              </p>
              <p className="text-text-blue font-bold">
                Available in hardback, paperback and ebook.
              </p>
              <div>
                <button className="bg-button-blue py-1.5 px-5 rounded-full ">
                  Explore
                </button>
              </div>
            </div>
          </ImageAside>
        </Container>
      </div>
      <div className="bg-bg-1 py-8">
        <Container>
          <ImageAside
            imageSrc="public/petra-quote.png"
            altText="Petra Alderman quote"
            imageClassName="w-2/3 mx-auto"
          >
            <div className="flex flex-col justify-between gap-14">
              <h2 className="text-4xl font-bold text-text-dark">About Petra</h2>
            </div>
            <br />
            <p className="text-text-dark">
              I am a Post-Doctoral Research Fellow in Leadership for Inclusive
              and Democratic Politics at the University of Birmingham, and a
              Research Fellow of the Birmingham’s Centre for Elections,
              Democracy, Accountability & Representation (CEDAR). My areas of
              expertise include democratic and authoritarian politics. I have a
              special interest in elections and nation branding and a geographic
              focus on Southeast Asia. I am a country expert on Thailand.
            </p>
            <br />
            <p className="text-text-dark">
              Along with my research work, I am an editor of the People, Power,
              Politics podcast where, together with my CEDAR colleagues, I
              interview scholars about their work and publications on democracy,
              authoritarian politics, and elections. I am also a regular host on
              the Nordic Asia Podcast and Thailand Social Science Seminar Series
              (TS4).
            </p>
          </ImageAside>
        </Container>
      </div>
    </>
  );
};

export default Home;
