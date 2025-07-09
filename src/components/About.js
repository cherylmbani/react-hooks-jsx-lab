import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I am a passionate and driven web developer with a creative mind and a love for turning ideas into clean, functional websites. Currently sharpening my skills in software engineering, I enjoy working with HTML, CSS, JavaScript, and React.</p>
    <img src={image} alt="I made this"></img>
  </div>
  )
}

export default About;
