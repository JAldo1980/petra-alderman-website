import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bg-2 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2 text-headline-1">
            Social Media
          </h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/petra-alderman-8873b44a/"
                className="text-white hover:text-blue-500"
              >
                <p className="text-text-blue hover:text-blue-500">LinkedIn</p>
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/petraalderman.bsky.social"
                className="text-white hover:text-blue-500"
              >
                <p className="text-text-blue hover:text-blue-500">BlueSky</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2 text-headline-1">Menu</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="text-text-blue hover:text-blue-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research"
                    className="text-text-blue hover:text-blue-500"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/publications"
                    className="text-text-blue hover:text-blue-500"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teaching"
                    className="text-text-blue hover:text-blue-500"
                  >
                    Teaching
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link
                    to="/podcasts"
                    className="text-text-blue hover:text-blue-500"
                  >
                    Podcasts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media"
                    className="text-text-blue hover:text-blue-500"
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-text-blue hover:text-blue-500"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-text-blue hover:text-blue-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <a href="#" className="text-white hover:text-blue-500 cursor-pointer">
            Back to Top
          </a>
          <p className="mt-2 text-sm">
            &copy; {new Date().getFullYear()}. Dr. Petra Alderman. All Rights
            Reserved.
          </p>
          <p className="mt-2 text-sm">Designed & Built by James Alderman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
