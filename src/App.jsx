// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Podcasts from "./pages/Podcasts";
import Media from "./pages/Media";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
