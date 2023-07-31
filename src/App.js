import "./App.css";
import Navbar from "./components/Navbar/Navbar"; //or Navbar.js
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About id="aboutSection" />
      <TechStack id="toolsSection" />
      <Experience id="experienceSection" />
      <Project id="projectsSection" />
    </div>
  );
}

//All components are imported and called in App.js and App.js is imported and called in
//index.js. so you can say that All components inside index.js

export default App;
