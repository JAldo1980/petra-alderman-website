import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Events = () => {
  return (
    <div className="py-8">
      <Helmet>
        <title>Events | Petra Alderman</title>
        <meta name="description" content="Explore Dr Petra Alderman's Events" />
      </Helmet>
      <Container>
        <div className="text-text-dark">
          <h2 className="text-3xl font-bold mb-6">Events</h2>
          <p className="text-lg mb-4">
            I give regular presentations of my research at academic conferences,
            seminars, and workshops in the UK, United States, Europe, and Asia.
            I have also briefed research analysts at the Foreign, Commonwealth
            and Development Office (FCDO) in the UK.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <p className="text-lg italic">
              *** Book launch events coming soon! ***
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Past Events</h2>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">FCDO Briefings</h3>
              <ul className="list-disc ml-6">
                <li>
                  <strong>
                    ‘Understanding Pracharat: From a Thaksin-Style Economic
                    Strategy to a Successful Electoral Brand?’
                  </strong>{" "}
                  - 8 May 2019
                </li>
                <li>
                  <strong>‘Thailand – Outlook for 2018’</strong> - 1 December
                  2017
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">
                Selected Conferences and Roundtables
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  <strong>
                    ‘Authoritarian Electoral Management: Lessons from the 2019
                    Thai election’
                  </strong>{" "}
                  - EuroSEAS Conference, École des Hautes Études en Sciences
                  Sociales, Paris, 29 June – 1 July 2022
                </li>
                <li>
                  <strong>
                    ‘Authoritarian Electoral Management: Lessons from the 2019
                    Thai election’
                  </strong>{" "}
                  - ASIANET Conference, University of Oslo, 21-22 October 2021
                </li>
                <li>
                  <strong>
                    ‘Simple slogans are deep: Nation-branding and the
                    legitimation of political regimes’
                  </strong>{" "}
                  - British International Studies Association Conference
                  (virtual), 21-23 June 2021
                </li>
                <li>
                  <strong>
                    ‘From Nation Branding to Political Marketing: Pracharat and
                    the 2019 Thai Election’
                  </strong>{" "}
                  - Association for Asian Studies Annual Conference (virtual),
                  21-26 March 2021
                </li>
                <li>
                  <strong>‘Thailand’s Internal Nation Branding’</strong> -
                  SEAREG conference (virtual), University of Arizona, 16-18
                  December 2020
                </li>
                <li>
                  <strong>
                    ‘The Politics of Grief: Managing the passing of King
                    Bhumibol Adulyadej in the lead up to the royal transition’
                  </strong>{" "}
                  - PSA Annual International Conference, Nottingham Trent
                  University, Nottingham, 15-17 April 2019
                </li>
                <li>
                  <strong>
                    ‘Re-Branding the Meaning of Good Governance in Post-Coup
                    Thailand’
                  </strong>{" "}
                  - Association of Southeast Asian Studies UK (ASEASUK)
                  Conference, University of Leeds, 5-7 September 2018
                </li>
                <li>
                  <strong>
                    ‘Thailand 4.0: The Junta’s Post-Coup Nation Branding
                    Project’
                  </strong>{" "}
                  - Thailand Update Conference, Columbia University, New York,
                  USA, 27 March 2018
                </li>
                <li>
                  <strong>
                    ‘Thailand 4.0: The Junta’s Post-Coup Nation Branding
                    Project’
                  </strong>{" "}
                  - Association for Asian Studies Annual Conference, 22-25 March
                  2018, Washington D.C., USA
                </li>
                <li>
                  <strong>‘Thailand Update’ Roundtable</strong> - EuroSEAS
                  Conference, University of Oxford, 16-18 August 2017
                </li>
                <li>
                  <strong>
                    ‘Thailand 4.0 and the Internal Focus of Nation Branding’
                  </strong>{" "}
                  - PSA Annual International Conference, University of
                  Strathclyde, Glasgow, 10-12 April 2017
                </li>
                <li>
                  <strong>
                    ‘Nation Branding in Thailand: Moving Beyond Tourism and
                    Export Campaigns’
                  </strong>{" "}
                  - 1st International Symposium on Thai Studies: ‘The Globalized
                  Face of Thai Studies,’ Chulalongkorn University, Bangkok,
                  Thailand, 16-17 June 2016
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Research Seminars</h3>
              <ul className="list-disc ml-6">
                <li>
                  <strong>
                    ‘Undermining Democracy: The Election Commission of Thailand
                    in the 2019 Election (with Saowanee T. Alexander)’
                  </strong>{" "}
                  - Thailand Social Science Seminar Series (virtual), 11
                  November 2021
                </li>
                <li>
                  <strong>
                    ‘Southeast Asia’s Contentious Polls: Electoral management in
                    Comparative Perspective’
                  </strong>{" "}
                  - Roundtable (virtual) by LSE Saw Swee Hock Southeast Asia
                  Centre and the Nordic Institute of Asian Studies, University
                  of Copenhagen, 10 November 2021
                </li>
                <li>
                  <strong>
                    ‘Thailand’s New Political Generation – From Future Forward
                    to Youth Protests’
                  </strong>{" "}
                  - Public seminar (virtual), Stockholm University, 18 November
                  2020
                </li>
                <li>
                  <strong>
                    ‘Nation Branding and Political Legitimacy in Non-Democratic
                    Regimes: Re-branding post-coup Thailand’
                  </strong>{" "}
                  - Asian Dynamics Initiative, University of Copenhagen, 23
                  October 2019
                </li>
                <li>
                  <strong>
                    ‘Post-Election Thailand: Reflections and Looking Forward’
                  </strong>{" "}
                  - Saw Swee Hock Southeast Asia Centre (panel discussion),
                  London School of Economics and Political Science, 11 July 2019
                </li>
                <li>
                  <strong>
                    ‘Prospects for Elections in Thailand: The Future Forward
                    Party under the Spotlight’
                  </strong>{" "}
                  - Department of International Development and Saw Swee Hock
                  Southeast Asia Centre (panel discussion), London School of
                  Economics and Political Science, 8 October 2018
                </li>
                <li>
                  <strong>
                    ‘Nation Branding in Post-Coup Thailand: A Strategy Towards
                    Political Legitimation?’
                  </strong>{" "}
                  - Thai Forum, University of Leeds, 24 April 2018
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Workshops</h3>
              <ul className="list-disc ml-6">
                <li>
                  <strong>
                    ‘Authoritarian Electoral Management: Lessons from the 2019
                    Thai election’
                  </strong>{" "}
                  - Electoral Integrity Project pre-IPSA Workshop (virtual), 6
                  July 2021
                </li>
                <li>
                  <strong>
                    ‘Branding Authoritarian Nations: Political Legitimacy,
                    Nation Branding and Strategic National Myths in Post-Coup
                    Thailand’
                  </strong>{" "}
                  - IR Research Day, University of Copenhagen, 4 June 2020
                </li>
                <li>
                  <strong>‘Politics and Nation Branding in Thailand’</strong> -
                  EuroSEAS PhD Masterclass, University of Oxford, 15 August 2017
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Events;
