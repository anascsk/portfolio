import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Showcase/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Routes>
        <Route extact path="/">
         
        </Route>
        <Route path="/about"> </Route>
        <Route path="/projects"> </Route>
        <Route path="/contact"> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
