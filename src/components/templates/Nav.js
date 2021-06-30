import React from "react";
import Ul from "./Ul.js";
import { v4 as uuidv4 } from "uuid";

const Nav = (props) => {
  const links = [
    {
      id: uuidv4(),
      classes: "link-home ",
      text: "home",
      aTagUrl: "/index",
      aTagClasses: "nav-a-home",
    },
    {
      id: uuidv4(),
      classes: "link-about",
      text: "about",
      aTagUrl: "/about",
      aTagClasses: "nav-a-about",
    },
    {
      id: uuidv4(),
      classes: "link-contact ",
      text: "Contact",
      aTagUrl: "/contact",
      aTagClasses: "nav-a-contact",
    },
    {
      id: uuidv4(),
      classes: "link-shop",
      text: "Shop",
      aTagUrl: "/shop",
      aTagClasses: "nav-a-shop",
    },
    {
      id: uuidv4(),
      classes: "link-portfolio ",
      text: "Portfolio",
      aTagUrl: "/portfolio",
      aTagClasses: "nav-a-profile",
    },
  ];

  return (
    <nav className={props.classes}>
      <Ul links={links} />
    </nav>
  );
};

export default Nav;
