// src/pages/Home.jsx
import React from "react";
import ImageAside from "../components/ImageAside";
import ImagesBelow from "../components/ImagesBelow";
import ImagesAbove from "../components/ImagesAbove";
import Container from "../components/Container";
import GridContainers from "../components/GridContainers";
import Footer from "../components/Footer";

const Home = () => {
  const researchImages = [
    "/elections_img.png",
    "/nationbranding_img.png",
    "/southeastasia_img.png",
  ];

  const publicationData = [
    {
      imageSrc: "https://via.placeholder.com/150",
      description: "Description for Image 1",
      link: "https://example.com/image1",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      description: "Description for Image 2",
      link: "https://example.com/image2",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      description: "Description for Image 3",
      link: "https://example.com/image3",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      description: "Description for Image 4",
    },
  ];

  return (
    <>
      <div className="bg-bg-1 py-8">
        <Container>
          <ImageAside
            imageSrc="petra_hero.png"
            altText="Petra Alderman"
            imageClassName="w-full"
            //   contentClassName="flex flex-col justify-between gap-12"
          >
            <div className="flex flex-col justify-between gap-14">
              <div>
                <h2 className="text-6xl font-bold text-text-dark ">
                  Researcher<br></br>Policy Advisor <br></br>Author
                </h2>
              </div>
              <div>
                <p className="text-md text-text-orange font-bold">
                  Authoritarianism | Democratic Politics | Southesast Asia |
                  Thailand
                </p>
              </div>
            </div>
          </ImageAside>
        </Container>
      </div>
      <div className="bg-bg-2 py-8">
        <Container>
          <ImageAside
            imageSrc="/petra_book 1.png"
            altText="Petra Alderman"
            imageClassName="w-2/3 md:order-1"
            contentClassName="md:order-2"
          >
            <div className="flex flex-col justify-between gap-6">
              <h3 className="text-2xl font-bold text-headline-1">
                Buy Petra's book:
              </h3>
              <p className="text-xl text-text-orange">
                Branding Authoritarian Nations: Political Legitimation and
                Strategic National Myths in Military-Ruled Thailand
              </p>
              <p className="text-text-blue font-bold">
                Available in hardback, paperback and ebook.
              </p>
              <div className="flex gap-6">
                <a href="https://www.routledge.com/Branding-Authoritarian-Nations-Political-Legitimation-and-Strategic-National-Myths-in-Military-Ruled-Thailand/Alderman/p/book/9781032517551?srsltid=AfmBOopab51cV_9F9Wcpe7-q9NJGGuGmAfbitVLUfuBF-_7MyY9VABka">
                  <button className="bg-button-blue py-1.5 px-5 rounded-full drop-shadow-md hover:drop-shadow-sm">
                    Buy Book
                  </button>
                </a>
              </div>
            </div>
          </ImageAside>
        </Container>
      </div>
      <div className="bg-bg-1 py-8">
        <Container>
          <ImageAside
            imageSrc="/petra-quote.png"
            altText="Petra Alderman quote"
            imageClassName="w-2/3 mx-auto"
          >
            <div className="flex flex-col justify-between gap-14">
              <h2 className="text-4xl font-bold text-text-dark">About Petra</h2>
            </div>
            <br />
            <p className="text-text-dark">
              I am a researcher, policy advisor, and a manager of the Saw Swee
              Hock Southeast Asia Centre at the London School of Economics and
              Political Science (LSE). Before joining LSE, I was a postdoctoral
              research fellow at the Centre for Elections, Democracy,
              Accountability & Representation (CEDAR) at the University of
              Birmingham, and a postdoctoral researcher at the Nordic Institute
              of Asian Studies (NIAS) at the University of Copenhagen.
            </p>
            <br />
            <p className="text-text-dark">
              My main areas of expertise include democratic and authoritarian
              politics. I have a special interest in elections and electoral
              management, political polarisation, and promotional politics
              (especially nation branding). I have a geographic focus on
              Southeast Asia, with a notable country expertise on Thailand.
            </p>

            <br />
            <p className="text-text-dark">
              Along with my research work, I am an avid podcaster. At
              Birmingham, I founded the successfull People, Power, Politics
              podcast where I interviewed scholars about their work and
              publications on democracy, authoritarian politics, and elections.
              I was also a regular host on the Nordic Asia Podcast.
            </p>
          </ImageAside>
        </Container>
      </div>
      <div className=" py-8">
        <Container>
          <ImagesBelow
            title="Research"
            description="As a researcher, I am deeply fascinated by the question of how power is sustained and reproduced. I have explored this question primarily in the context of authoritarian regimes, focusing specifically on elections, nation branding and Southeast Asia."
            images={researchImages}
            imageClassName=""
            contentClassName="mb-4"
          ></ImagesBelow>
          <button className="bg-button-blue py-1.5 px-5 rounded-full mt-6 drop-shadow-md hover:drop-shadow-sm">
            Explore Petra's research
          </button>
        </Container>
      </div>
      <Container>
        <div className=" py-8">
          <ImagesAbove
            title="Publications"
            generalDescription="As a researcher, I am deeply fascinated by the question of how power is sustained and reproduced. I have explored this question primarily in the context of authoritarian regimes, focusing specifically on elections, nation branding and Southeast Asia."
            publicationData={[
              {
                imageSrc: "/article-image.png",
                description:
                  "A very brief overview of article can go here. Keep it reasonably short and to the point.",
                link: "https://example.com/image1",
              },
              {
                imageSrc: "/article-image.png",
                description:
                  "A very brief overview of article can go here. Keep it reasonably short and to the point.",
                link: "https://example.com/image2",
              },
              {
                imageSrc: "/article-image.png",
                description:
                  "A very brief overview of article can go here. Keep it reasonably short and to the point.",
                link: "https://example.com/image3",
              },
              {
                imageSrc: "/article-image.png",
                description:
                  "A very brief overview of article can go here. Keep it reasonably short and to the point.",
                link: "https://example.com/image3",
              },
            ]}
            imageClassName=""
            contentClassName="mb-4"
          />
          <div>
            <button className="bg-button-blue py-1.5 px-5 rounded-full mt-4 drop-shadow-md hover:drop-shadow-sm">
              Explore Petra's publications
            </button>
          </div>
        </div>
      </Container>
      <div className="py-8">
        <Container>
          <GridContainers />
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Home;
