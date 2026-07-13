import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import AWSSkills from "./components/AWSSkills";
import DevOpsTools from "./components/DevOpsTools";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AWSSkills />
      <DevOpsTools />
      <Projects />
      <Education />
<Certifications />
<Contact />
<Footer />
    </>
  );
}
export default App;