import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { Player } from '@lottiefiles/react-lottie-player';


export const About = () => {
  return (
    <>
      <div className="about-animate">
        <div className="about center">

          <div className="home">
            <h4 data-aos="fade-right" className="mobileHead">
              Hello, I am <span className="about__name">Santhiya. K</span>
            </h4>
            <Type />
            <p className="about__desc" data-aos="fade-left">
            A self-taught developer with an interest in Computer Science.

            </p>
          </div>

          <div className="about__contact center" style={{ marginRight: "250px", marginLeft:"150px" }}>
            <a
              href="https://github.com/Santhiyasanthiya"
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              className="link link--icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:santhiya30032@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="mail"
              className="link link--icon"
            >
              <EmailIcon />
            </a>
            <a
              href="tel:+919360430032"
              target="_blank"
              rel="noreferrer"
              aria-label="phone"
              className="link link--icon"
            >
              <PhoneIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/santhiya-santhiya-4a8783242/"
              aria-label="linkedin"
              className="link link--icon"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
        
          </div>

          <button
            className="btnResume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/17VcNq7FfabBae0gNsllZ6Tq5F_cTqS2v/view?usp=sharing"
              );
            }}
          >
            Resume
          </button>
        </div>

        <div data-aos="fade-right" className="lottiefiles">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_BROxHtztMy.json"
            style={{ height: '500px', width: '450px' }}
          >
          </Player>
        </div>
        
      </div>

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};