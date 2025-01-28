import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";

const Podcasts = () => {
  return (
    <div className="py-8">
      <Container>
        <div className="">
          <div className="">
            <div>
              <h1 className="text-3xl font-bold mb-4">Podcasts</h1>
              <p className="mb-4">
                I am an editor of and a regular host on the{" "}
                <strong>People, Power, Politics</strong> podcast produced by
                Birmingham’s Centre for Elections, Democracy, Accountability &
                Representation (CEDAR). I am also a regular host on the{" "}
                <strong>Nordic Asia Podcast</strong> produced by the Nordic
                Institute of Asian Studies (NIAS) at the University of
                Copenhagen along with several of its Nordic partners.
              </p>
              <p className="mb-4">
                Both podcast series are hosted by the New Books Network. You can
                find some of my favourite episodes featured below. For the full
                list of my hosted episodes, visit my{" "}
                <a
                  href="https://newbooksnetwork.com/hosts/profile/4ccfa374-4540-4e8c-822d-64c91df7a00c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  New Books Network host profile
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Featured Episodes</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">As a Guest Speaker</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    href="https://newbooksnetwork.com/003-branding-post-coup-thailand-with-petra-desatova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Branding Post-Coup Thailand with Petra Desatova
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                As a Host on People, Power, Politics
              </h3>
              <p>*** Coming soon ***</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                As a Host on Nordic Asia Podcast
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    href="https://newbooksnetwork.com/can-thailand-move-forward"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Can Thailand Move Forward? A Discussion of the May 2023 Thai
                    Election with Duncan McCargo and Ken Lohatepanont
                  </a>
                </li>
                <li>
                  <a
                    href="https://newbooksnetwork.com/the-woman-president"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Broken Pathways: Women’s Political Leadership in Sri Lanka
                    with Ramona Vijeyarasa and Nadine Vanniasinkam
                  </a>
                </li>
                <li>
                  <a
                    href="https://newbooksnetwork.com/the-race-for-the-governor-talking-bangkok-elections-with-saksith-saiyasombut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    The Race for the Governor: Talking Bangkok Elections with
                    Saksith Saiyasombut
                  </a>
                </li>
                <li>
                  <a
                    href="https://newbooksnetwork.com/thai-totalitarians-why-the-love-of-authoritarian-symbols"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Thai Totalitarians? Why the Love of Authoritarian Symbols? A
                    discussion with Verita Sriratana
                  </a>
                </li>
                <li>
                  <a
                    href="https://newbooksnetwork.com/network-monarchy-and-its-challengers-making-sense-of-thai-politics-with-duncan-mccargo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    ‘Network Monarchy’ and Its Challengers: Making Sense of Thai
                    Politics with Duncan McCargo
                  </a>
                </li>
                <li>
                  <a
                    href="https://newbooksnetwork.com/chris-chaplin-salafism-and-the-state-islamic-activism-and-national-identity-in-contemporary-indonesia-nias-press-2021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Salafism and the State: Islamic Activism and National
                    Identity in Contemporary Indonesia with Chris Chaplin
                  </a>
                </li>
                <li>
                  <a
                    href="https://newbooksnetwork.com/the-global-sushi-hype-with-tine-walravens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    The Global Sushi Hype with Tine Walravens
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Podcasts;
