import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./logo.png";
import ListItemButton from '@mui/material/ListItemButton';
import logo from '../../assets/logo.png'

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" >
            <span>
              <img src={logo} data-aos="fade-right" className="santhiya-logo"/>
            </span>
           
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};