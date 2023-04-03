import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className="center nav">
        <List
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <ListItem disablePadding className="nav__list-item">
            <ListItemButton
            component="a"
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding className="nav__list-item">
            <ListItemButton
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className="nav__list-item">
            <ListItemButton
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className="nav__list-item">
            <ListItemButton
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="nav__list-item">
            <ListItemButton
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="nav__list-item">
            <ListItemButton
              href="https://drive.google.com/file/d/17VcNq7FfabBae0gNsllZ6Tq5F_cTqS2v/view?usp=sharing"
              onClick={toggleNavList}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </ListItemButton>
          </ListItem >
        </List>

        
        <IconButton
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </IconButton>
        <IconButton
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </nav>
    </>
  );
};
