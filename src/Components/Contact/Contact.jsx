import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Contact <span className="different">Me</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/santhiya-santhiya-4a8783242/"
              target="_blank"
              rel="noreferrer"
            >
                          <FaLinkedin color=" #0e76a8" />
            </a>
            <a
              href="https://github.com/Santhiyasanthiya"
              target="_blank"
              rel="noreferrer"
            >
            <VscGithub color="#333" />
            </a>
            <a
              href="mailto:santhiya30032@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
                  <CgMail color="FBBC05" />
            </a>
            <a href="tel:+919360430032" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>santhiya30032@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+91-9360430032</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
