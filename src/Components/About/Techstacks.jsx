import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,

} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import {GrMysql} from "react-icons/gr"
import postman from"./Postman.gif";


export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          
          <div>
            <SiHtml5 color="#e34c26"/>
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 color="#264de4"/>
            <h5>CSS</h5>
          </div>

          <div>
            <SiJavascript color="#f0db4f" />
            <h5>Javascript</h5>
          </div>

          <div>
            <BsBootstrap color="#59287a"/>
            <h5>Bootstrap</h5>
          </div>

          <div>
            <FaReact color="#5bc0de"/>
            <h5>React Js</h5>
          </div>

          <div>
            <SiMaterialui color="#007fff"/>
            <h5>MUI</h5>
          </div>

          <div>
            <GrMysql color="#4078c0"/>
            <h5>MySql</h5>
          </div>

          <div>
            <DiMongodb color="4DB33D"/>
            <h5>MongoDb</h5>
          </div>

          <div>
            <FaNodeJs color="#3c873a"/>
            <h5>Nodejs</h5>
          </div>
         

          <div>
            <SiExpress color="68A063"/>
            <h5>Express</h5>
          </div>

          <div>
            <img src={postman} style={{width:"50px"}} alt="Postman" />
            <h5>Postman</h5>
          </div>

          <div>
            <FaAws color="FF9900" />
            <h5>AWS</h5>
          </div>
          
        </div>
      </div>
    </>
  );
};