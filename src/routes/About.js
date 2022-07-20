import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const usl = useLocation();
  console.log(usl);
  return <span>About this page</span>;
}

export default About;
