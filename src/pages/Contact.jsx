import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="py-8">
      <Helmet>
        <title>Contact | Petra Alderman</title>
        <meta name="description" content="Contact Dr Petra Alderman" />
      </Helmet>
      <Container>
        <div className="">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Work Addresses</h2>
            <ul className="list-none p-0">
              <li className="mb-2">
                Office 1: 123 Main St, Birmingham, England
              </li>
              <li className="mb-2">Office 2: 456 Elm St, London, England</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Email me</h2>
            <a
              href="mailto:contact@yourcompany.com"
              className="text-blue-600 hover:underline"
            >
              contact@yourcompany.com
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
