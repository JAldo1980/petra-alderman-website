import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="py-8">
      <Helmet>
        <title>About | Petra Alderman</title>
        <meta
          name="description"
          content="Learn more about Petra Alderman’s academic background and research interests."
        />
      </Helmet>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl text-text-dark font-bold mb-4">About Me</h2>
            <p className="mb-4 text-text-dark">
              I am an author, researcher, and policy advisor specialising in
              authoritarian and democratic politics, with a primary focus on
              Southeast Asia. I have particular expertise on Thailand, including
              full linguistic proficiency in the Thai language.
            </p>
            <p className="mb-4 text-text-dark">
              Over the past 15 years, I have lived and studied in Thailand on
              several occasions, developing a deep appreciation for the country
              and its people. My Central European background (I grew up in
              post-communist Czechoslovakia/Slovakia) combined with years of
              study and work in the United Kingdom and Denmark, gives me a
              unique set of experiences and perspectives that I bring to both
              research and policy work.
            </p>
            <p className="mb-4 text-text-dark">
              I currently manage the Saw Swee Hock Southeast Asia Centre at the
              London School of Economics and Political Science (LSE). Before
              joining LSE, I was a joint research fellow at the Centre for
              Elections, Democracy, Accountability and Representation (CEDAR)
              and the International Development Department at the University of
              Birmingham (2021–2025), and a postdoctoral research fellow at the
              Nordic Institute of Asian Studies (NIAS) at the University of
              Copenhagen (2019–2021). I received my PhD from the University of
              Leeds.
            </p>
            <p className="mb-6 text-text-dark">
              <a href="/contact" aria-label="contact me link">
                Please feel free to contact me.
              </a>
            </p>
            <h2 className="text-2xl text-text-dark font-semibold mb-4">
              Biography
            </h2>
            <p className="mb-4 text-text-dark">
              I joined the University of Birmingham in December 2021 after two
              years at the Nordic Institute of Asian Studies and the Department
              of Political Science at the University of Copenhagen, where I was
              a postdoctoral research fellow.
            </p>
            <p className="mb-4 text-text-dark">
              Prior to that I was a doctoral researcher at the University of
              Leeds. My PhD thesis was nominated for the British International
              Studies Association’s 2020 Michael Nicholson Thesis Prize and
              long-listed for the International Convention of Asia Scholars 2021
              Book Prize for the Best Dissertation in the Social Sciences.
            </p>
            <p className="mb-6 text-text-dark">
              In 2020, I was selected a Young Southeast Asia Fellow
              (non-resident) by the Southeast Asia Research Group for my leading
              work on nation branding.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="/petra_hero.png"
              alt="Research Fellow"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {" "}
            <h2 className="text-2xl text-text-dark font-semibold mb-4">
              Qualifications
            </h2>
            <ul className="list-disc ml-6 mb-6 text-text-dark">
              <li>
                PhD in Politics and International Studies, University of Leeds,
                2019
              </li>
              <li>
                MA in Professional Language and Intercultural Studies,
                University of Leeds, 2013
              </li>
              <li>
                BA in International Relations and Thai and Southeast Asian
                Studies, University of Leeds, 2012
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-text-dark font-semibold mb-4">
              Other Activities
            </h2>
            <ul className="list-disc ml-6 mb-6 text-text-dark">
              <li>
                Former editor and current host on the Nordic Asia Podcast series
                (20,000+ downloads a month), April 2020 – Present.
              </li>
              <li>
                Thailand team member, Palacky University Olomouc, Sinophone
                Borderlands survey in Asia, March 2021 – Present.
              </li>
              <li>
                Thailand Social Science Seminar (TS4) committee member, May 2021
                – Present.
              </li>
              <li>
                International consultant, United States Institute of Peace,
                Thailand’s 2019 General Elections, March 2016 – December 2020.
              </li>
              <li>
                Country specialist coder (Thailand), University of Manchester,
                Effective States and Inclusive Development Survey, March–July
                2019.
              </li>
              <li>
                Consultant (Thailand case study), United States Institute of
                Peace, Preventing Election Violence, Lessons Learned Project,
                October 2014 – February 2015.
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
