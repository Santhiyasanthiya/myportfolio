import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import ListItemButton from '@mui/material/ListItemButton';
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import BookMyShow from "../../assets/BookMyShow.jpg";
import diary from "../../assets/diary.png";
import money from "../../assets/money.png";



export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={BookMyShow} alt="Book MyShow Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Book MyShow Clone</h2>
                <p>
                  Ticket booking is a process of selecting and making
                  reservations for the cinema in a particular theatre via the
                  online source.
                </p>
                <div style={{margin:"0px"}}>
                <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>
                <div>

                <a style={{textDecoration:"none"}}

                    href="https://github.com/Santhiyasanthiya/guvi-hackathon2-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      FrontEnd
                    </span>
                   </a>


                  <a style={{textDecoration:"none"}}
                    href="https://github.com/Santhiyasanthiya/guvi-hackathon2-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      BackEnd
                    </span>
                  </a>


                  <a style={{textDecoration:"none"}}
                    href="https://guvi-hackathon-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      style={{ paddingRight: "25px", paddingLeft: "25px" }}
                      type="button"
                      className="btns onbt"
                    >
                      Live
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
               
                    src={diary}
                    alt="Diary manager app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Diary Manager app</h2>
                <p>
                  Diary management entails scheduling and documenting each and every forthcoming meeting in a precise and timely manner.
                </p>
                <div style={{margin:"0px"}}>
                <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>
                <div>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/Santhiyasanthiya/Diary-Manager-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      FrontEnd
                    </span>
                  </a>


                  <a style={{textDecoration:"none"}}
                    href="https://github.com/Santhiyasanthiya/Diary-Manager-Backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      BackEnd
                    </span>
                  </a>

                  <a style={{textDecoration:"none"}}
                    href="https://diary-manager-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ paddingRight: "25px", paddingLeft: "25px" }} type="button" className="btns onbt">
                      Live
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={money} alt="Money Manager" />
                </div>
              </div>
              <div className="project_information">
                <h2>Money Manager Clone</h2>
                <p>
                Money Manager Web Application that will be useful 
                for managing personal finances as easy as pie! 
.
                </p>
                <div style={{margin:"0px"}}>
                <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>

                <div style={{margin:"0px"}}>
                  <a style={{textDecoration:"none"}} 
                    href="https://github.com/Santhiyasanthiya/money-manager-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      FrontEnd
                    </span>
                  </a>

                  <a style={{textDecoration:"none"}}
                    href="https://github.com/Santhiyasanthiya/money-manager-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      BackEnd
                    </span>
                  </a>

                  <a style={{textDecoration:"none"}}
                    href="https://playful-kelpie-719896.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      style={{ paddingRight: "25px", paddingLeft: "25px" }}
                      type="button"
                      className="btns onbt"
                    >
                      Live
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
