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
              I am a Post-Doctoral Research Fellow in Leadership for Inclusive
              and Democratic Politics at the University of Birmingham, and a
              Research Fellow of the Birmingham’s Centre for Elections,
              Democracy, Accountability & Representation (CEDAR).
            </p>
            <p className="mb-4 text-text-dark">
              My areas of expertise include democratic and authoritarian
              politics. I have a special interest in elections and nation
              branding and a geographic focus on Southeast Asia. I am a country
              expert on Thailand.
            </p>
            <p className="mb-4 text-text-dark">
              Along with my research work, I am an editor of the People, Power,
              Politics podcast where, together with my CEDAR colleagues, I
              interview scholars about their work and publications on democracy,
              authoritarian politics and elections. I am also a regular host on
              the Nordic Asia Podcast and Thailand Social Science Seminar Series
              (TS4).
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
