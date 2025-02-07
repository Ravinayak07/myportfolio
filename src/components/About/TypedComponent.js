import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Front-End Developer", "Azure DevOps Engineer"],
      typeSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={typedRef}></span>
    </div>
  );
};

export default TypedComponent;
