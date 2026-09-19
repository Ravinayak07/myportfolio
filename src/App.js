import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <SyncLoader
            color={"#38bdf8"}
            loading={true}
            size={24}
            margin={6}
            aria-label="Loading Spinner"
          />
          <span className="loader-text">INITIALIZING SYSTEM...</span>
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <main>
            <About id="aboutSection" />
            <TechStack id="toolsSection" />
            <Experience id="experienceSection" />
            <Project id="projectsSection" />
            <Education id="educationSection" />
          </main>
          <Contact id="contactSection" />
        </div>
      )}
    </>
  );
}

export default App;
