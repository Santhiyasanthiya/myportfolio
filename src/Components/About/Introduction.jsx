import React from "react";
import "./Introduction.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeContext } from "../../Context/theme";
import mypic from "../../assets/mypic.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src={mypic}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
              I seek to work in a competitive field and ready to accept the
                <span className="different"> challenges, utilizing my skills </span> would like to work with a 
                <span className="different"> highly esteemed company
                </span>
                which gives me a platform to use my expertise and
              skills for mutual growth and
                <span className="different">
                benefit of company and myself.
                </span>
              </h4>

              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Born: 6 Dec 1997
              </h4>

              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Department: IT
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Dip: Nursing
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Nationality: Indian
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Language: Tamil & English
              </h4>

              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                City: Vellore, TamilNadu, India
              </h4>
              
              <h4>I Started off my self-learning journey with online tutorials Google, YouTube, etc and took a step further and Enrolled in the GUVI IIT MADRAS Fullstack developer Program which involved extensive programming and real world projects. Later, I learned MERN Stack From Guvi and built an Website using React JS, Node, Express Js, MongoDB.</h4>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
