import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
