import React from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

function About() {
  const usl = useLocation();
  console.log(usl);
  return (
    <div className="about__container">
      <span>About this page</span>
    </div>
  );
}

export default About;
