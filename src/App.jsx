import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <h1>Welcome to Petra Alderman's Website</h1>;
const About = () => <h1>About Petra Alderman</h1>;
const Research = () => <h1>Research</h1>;
const Publications = () => <h1>Publications</h1>;
const Teaching = () => <h1>Teaching</h1>;
const Podcasts = () => <h1>Podcasts</h1>;
const Media = () => <h1>Media</h1>;
const Events = () => <h1>Events</h1>;
const Contact = () => <h1>Contact</h1>;

export default App;
