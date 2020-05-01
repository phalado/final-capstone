/* eslint-disable */
import React from 'react';
import './styles/About.css';

const About = () => (
  <div>
    <h1 className="mt-5">About</h1>
    <p className="about-text">
      This page was produced by Raphael Cordeiro as the final
      capstone for Microverse&apos;s full-stack program.
    </p>
    <p className="about-text">
      To know more about this page, consider visiting and starring its repository:
      <a href="https://github.com/phalado/final-capstone" target="_blank"> https://github.com/phalado/final-capstone</a>
    </p>
    <p className="about-text">
      The API used for this project is also part of the project and can be seen in the repository:
      <a href="https://github.com/phalado/final-capstone-api" target="_blank"> https://github.com/phalado/final-capstone-api</a>
    </p>
    <p className="about-text">Fell free to visit my social medias and send me a hello clicking on the icons below.</p>
    <div className="about-icon-container">
      <a href="https://github.com/phalado/" className="about-icon github-icon" target="_blank" />
      <a href="https://twitter.com/Phalado" className="about-icon twitter-icon" target="_blank" />
      <a href="https://www.linkedin.com/in/raphael-cordeiro/" className="about-icon linkedin-icon" target="_blank" />
    </div>
    <p className="about-text">
      I have no business rights about the characters used in this catalog.
      This is only for learning purposes. All characters belongs to
      <a href="https://www.dreamworks.com/how-to-train-your-dragon" target="_blanck"> DreamWorks</a>
    </p>
  </div>
);

export default About;
