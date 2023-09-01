"use client";
import React, { useState } from "react";
import classes from "./Navbar.module.scss";

const Background: React.FC<{}> = () => {
  const [isColored, setIsColored] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) setIsColored(true);
    else setIsColored(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={`${classes.navbar} ${
        isColored ? classes["navbar--scrolled"] : ""
      }`}
    ></div>
  );
};

export default Background;
