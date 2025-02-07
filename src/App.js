import Navbar from "./components/Navbar/Navbar"; //or Navbar.js
import Navbarr from "./components/Navbarr/Navbarr"; //or Navbar.js
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import { Route, Routes } from "react-router-dom";

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);
  return (
    <>
      {Loading ? (
        <div className="loader">
          <SyncLoader
            color={"#0A66C2"}
            loading={true}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="App">
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Navbar />
          <About id="aboutSection" />
          <TechStack id="toolsSection" />
          <Experience id="experienceSection" />
          <Project id="projectsSection" />
        </div>
      )}
      ;
    </>
  );
}

//All components are imported and called in App.js and App.js is imported and called in
//index.js. so you can say that All components inside index.js

export default App;
