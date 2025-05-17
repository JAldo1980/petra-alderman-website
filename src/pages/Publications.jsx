import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Publications = () => {
  return (
    <div className="py-8">
      <Helmet>
        <title>Events | Petra Alderman</title>
        <meta
          name="description"
          content="Explore Dr Petra Alderman's Publications"
        />
      </Helmet>
      <Container>
        <div className="">
          <div className="">
            {/* Text Section */}
            <div>
              <h2 className="text-3xl text-text-dark font-bold mb-4">
                Publications
              </h2>

              <section className="mb-8">
                <h2 className="text-xl text-text-dark font-semibold mb-2">
                  Books
                </h2>
                <ul className="list-disc ml-6 text-text-dark">
                  <li>
                    Alderman, Petra.{" "}
                    <em>
                      Branding Authoritarian Nations: Political Legitimation and
                      Strategic National Myths in Military-Ruled Thailand
                    </em>
                    . Abingdon: Routledge, 2024.{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Link
                    </a>
                    .
                  </li>
                </ul>
              </section>

              <section className="mb-8 text-text-dark">
                <h2 className="text-xl font-semibold mb-2">Journal articles</h2>
                <ul className="list-disc ml-6">
                  <li>
                    Alderman, Petra. ‘Authoritarian Electoral Management:
                    Lessons from Thailand.’{" "}
                    <em>Journal of Current Southeast Asian Affairs</em>,
                    forthcoming.
                  </li>
                  <li>
                    Alderman, Petra and Kristin Eggeling. ‘Vision documents,
                    nation branding and the legitimation of non-democratic
                    regimes.’ <em>Geopolitics</em>, online first (January 2023):
                    1-31.{" "}
                    <a
                      href="https://www.tandfonline.com/doi/abs/10.1080/14650045.2023.2165441"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li>
                    Desatova, Petra and Saowanee T. Alexander. ‘Electoral
                    Commissions and Non-Democratic Outcomes: Thailand’s
                    Contentious 2019 Election.’ <em>Politics</em>, online first
                    (April 2021): 1-15.{" "}
                    <a
                      href="https://journals.sagepub.com/doi/full/10.1177/02633957211000978"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li>
                    Desatova, Petra. ‘Bangkok: Two Cities.’{" "}
                    <em>Contemporary Southeast Asia</em> 41, no.2 (August 2019):
                    176-182.{" "}
                    <a
                      href="https://muse.jhu.edu/article/732131/pdf"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li>
                    Desatova, Petra. ‘Thailand 4.0 and the Internal Focus of
                    Nation Branding.’ <em>Asian Studies Review</em> 42, no.4
                    (December 2018): 1-19.{" "}
                    <a
                      href="https://www.tandfonline.com/doi/full/10.1080/10357823.2018.1512555"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li>
                    McCargo, Duncan, Saowanee T. Alexander and Petra Desatova.
                    ‘Ordering Peace: Thailand’s 2016 Constitutional Referendum.’{" "}
                    <em>Contemporary Southeast Asia</em> 39, no.1 (April 2017):
                    65-95.{" "}
                    <a
                      href="https://muse.jhu.edu/article/657979"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                </ul>
              </section>

              <section className="mb-8 text-text-dark">
                <h2 className="text-xl font-semibold mb-2">Book chapters</h2>
                <ul className="list-disc ml-6">
                  <li>
                    McCargo, Duncan and Petra Desatova. ‘Thailand: Electoral
                    Intimidation.’ In:{" "}
                    <em>
                      Electing Peace: Violence Prevention and Impact at the
                      Polls
                    </em>
                    , edited by Jonas Claes, 63-69. Washington DC: United States
                    Institute of Peace Press, 2016.{" "}
                    <a
                      href="https://www.usip.org/publications/2017/01/electing-peace"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2 text-text-dark">
                  Policy reports & briefs
                </h2>
                <ul className="list-disc ml-6 text-text-dark">
                  <li>
                    Alderman, Petra. ‘Legislative leadership on environmental
                    issues,’ Westminster Foundation for Democracy, November
                    2022.{" "}
                    <a
                      href="https://www.wfd.org/what-we-do/resources/legislative-leadership-environmental-issues"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li>
                    Alderman, Petra. ‘What we know (and don’t know) about
                    election observation in 2021,’ Election Observation Research
                    Network, February 2022.{" "}
                    <a
                      href="https://electordotnetwork.files.wordpress.com/2022/02/elector-brief-06.pdf"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li>
                    Alderman, Petra. ‘Research in Brief 3: The importance and
                    implications of electoral commission independence,’ Election
                    Observation Research Network, February 2022.{" "}
                    <a
                      href="https://elector.network/research-briefs/"
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                    .
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Publications;
