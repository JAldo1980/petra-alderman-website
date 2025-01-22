import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Nav = () => {
  return (
    <div className="bg-bg-1 pt-4">
      <Container>
        <div className="flex justify-between">
          <a href="/">
            <h3>
              Petra <span className="text-gray-400">Alderman</span>
            </h3>
          </a>

          <div className="flex justify-between gap-2 flex-wrap">
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
            <Link to="/research" className="cursor-pointer">
              Research
            </Link>
            <Link to="/publications" className="cursor-pointer">
              Publications
            </Link>
            <Link to="/teaching" className="cursor-pointer">
              Teaching
            </Link>
            <Link to="/podcasts" className="cursor-pointer">
              Podcasts
            </Link>
            <Link to="/media" className="cursor-pointer">
              Media
            </Link>
            <Link to="/events" className="cursor-pointer">
              Events
            </Link>
            <Link to="/contact" className="cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
