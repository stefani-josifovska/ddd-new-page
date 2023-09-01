import React, { ReactNode } from "react";
import classes from "./Grid.module.scss";

const Grid: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <section className={`${classes.container} my-20`}>{children}</section>;
};

export default Grid;
