import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";

const Teaching = () => {
  return (
    <div className="py-6">
      <Container>
        <section className="">
          <div className="">
            <div>
              <h1 className="text-3xl font-bold mb-4">Teaching</h1>
              <p className="mb-4">
                I am an experienced and dedicated teacher who is passionate
                about providing high-quality education to students from diverse
                backgrounds. I have designed and delivered my own module as well
                as taught on several introductory modules within the disciplines
                of comparative politics and international relations.
              </p>
              <p className="mb-4">
                I have taught undergraduate and postgraduate students at
                universities in the United Kingdom and Denmark and given guest
                lectures in the Czech Republic and Thailand. Through this varied
                experience, I have developed a comprehensive teaching style that
                encourages active learning and fosters an inclusive and engaging
                classroom environment.
              </p>
              <p className="mb-4">
                In my classes, I prioritise open discussion and constructive
                debate while ensuring that students are exposed to a diverse
                range of perspectives. To achieve this, I use a variety of
                teaching materials, including readings from non-western
                scholars, foreign-language visuals with subtitles, and examples
                from outside the western world. I encourage my students to
                explore and engage with countries they have not studied or
                visited before.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-4">Experiences</h2>
              <h3 className="text-xl font-bold mb-2">
                University of Copenhagen (as a convenor)
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Promotional Politics in Asia (PRG):</strong> Design
                  and delivery of lectures and seminars over the 2020/2021
                  Spring semester, class size: 44 students (fully on Zoom).
                </li>
              </ul>
              <h3 className="text-xl font-bold mb-2">
                University of Leeds (as a teaching assistant)
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Comparative Politics (UG, Level 1) – Small-group teaching,
                  seminar delivery.
                </li>
                <li>
                  International Politics (UG, Level 1) – Small-group teaching,
                  seminar delivery.
                </li>
                <li>
                  An Introduction to Thinking Interculturally (UG, Level 1) –
                  Small-group teaching, seminar delivery, and a short digital
                  contribution titled ‘Case study: Branding Thailand’ for the
                  online part of this blended-learning course.
                </li>
                <li>
                  Skills and Issues in Intercultural Studies (PGR) – Design and
                  delivery of two guest lectures and seminars titled ‘Culture
                  and Democracy Discourse’ and ‘Nation Branding.’
                </li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Guest Lectures</h3>
              <ul className="list-disc pl-6">
                <li>
                  ‘Thailand’s Contentious 2019 Election [online; in Thai],’
                  Thammasat University, Bangkok, Thailand, 8 November 2020.
                </li>
                <li>
                  ‘Nation Branding and Thailand’s Political Conflict After the
                  2014 Coup,’ Palacky University, Olomouc, Czech Republic, 1
                  November 2017.
                </li>
                <li>
                  ‘Culture and Democracy Discourse: The case of Thai-style
                  democracy,’ Chulalongkorn University, Bangkok, Thailand, 4
                  October 2016.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Teaching;
