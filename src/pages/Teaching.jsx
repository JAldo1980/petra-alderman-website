import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Teaching = () => {
  return (
    <div className="py-8">
      <Helmet>
        <title>Teaching | Petra Alderman</title>
        <meta
          name="description"
          content="Explore Dr Petra Alderman's Teaching Work"
        />
      </Helmet>
      <Container>
        <section className="text-text-dark">
          <div className="">
            <div>
              <h2 className="text-3xl font-bold mb-4">Teaching</h2>
              <p className="mb-4">
                I am a committed, enthusiastic and skilled teacher with five
                years of teaching experience. I enjoy mentoring students from
                diverse backgrounds and foster an inclusive and enjoyable
                learning environment. In my classes, I encourage constructive
                debate and disagreement, assign readings from non-western
                scholars, use visual foreign-language materials (with subtitles)
                and examples from outside the western world. I encourage my
                students to engage with countries they have not studied or
                visited before.
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
                  <strong>Promotional Politics in Asia (PRG):</strong> - design
                  and delivery of lectures and seminars over 2020/2021 Spring
                  semester, class size: 44 students (fully on Zoom).
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
                  An Introduction to <em>Thinking Interculturally</em> (UG,
                  Level 1) – small-group teaching, seminar delivery & a short
                  digital contribution titled ‘Case study: Branding Thailand’
                  for the online part of this blended-learning course.
                </li>
                <li>
                  Skills and Issues in Intercultural Studies (PGR) – design and
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
