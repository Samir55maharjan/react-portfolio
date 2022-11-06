import { Button } from "react-bootstrap";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div class="wrapper" id="wrapper">
      {/* <!-- hero section --> */}
      <Hero />

      {/* <!-- skills section --> */}
      <Skills />
      {/* <!-- projects section --> */}
      <Projects />
      {/* <!-- About me section --> */}
      <AboutMe />
      {/* <!-- contact section --> */}
      <Contact />
      {/* <!-- footer section --> */}
      <footer class="footer bg-dark text-light text-center py-5 mt-5">
        Copyritght &copy; all reserved. Made with 💓 by me.
      </footer>

      <a href="#wrapper" class="goup" id="goup">
        <i class="fa-solid fa-circle-up fa-3x text-primary"></i>
      </a>
    </div>
  );
}

export default App;
