import React from "react";
import classes from "./Boxes.module.scss";
import { boxObject } from "@/app/globalTypes";
import Link from "next/link";

const Box: React.FC<{ item: boxObject }> = ({ item }) => {
  return (
    <div className={`${classes.boxContainer} flex flex-col gap-2`}>
      <h4>{item.title}</h4>
      <h5>{item.subtitle}</h5>
      {item.content.map((point) => (
        <p key={Math.random().toString()}>{point}</p>
      ))}
      {item.link && <Link href={item.link.href}>{item.link.text}</Link>}
    </div>
  );
};

export default Box;
