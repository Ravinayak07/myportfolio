import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "AI Systems Engineer",
        "Cloud & Microservices Architect",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1800,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef} className="typed-text-glow"></span>;
};

export default TypedComponent;
