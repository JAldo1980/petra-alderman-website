import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Nav = () => {
  return (
    <div className="bg-bg-1 pt-4">
      <Container>
        <div className="flex justify-between">
          <a href="/">
            <h3 className="font-bold text-text-orange text-4xl leading-none">
              Dr{" "}
              <span className="uppercase font-bold text-text-orange text-4xl leading-none">
                Petra{" "}
              </span>
              <br />
              <span className="uppercase text-4xl font-bold leading-none text-text-dark">
                Alderman
              </span>
            </h3>
          </a>

          <div className="flex justify-between text-text-dark gap-4 flex-wrap">
            {[
              { to: "/about", label: "About" },
              { to: "/research", label: "Research" },
              { to: "/publications", label: "Publications" },
              { to: "/teaching", label: "Teaching" },
              { to: "/podcasts", label: "Podcasts" },
              { to: "/media", label: "Media" },
              { to: "/events", label: "Events" },
              { to: "/contact", label: "Contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="cursor-pointer relative group text-lg"
              >
                {link.label}
                <span className="absolute top-7 left-0 bottom-0 w-0 h-[2px] bg-text-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
