import React from "react";
import classes from "./Dropdown.module.scss";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

const DropdownItem: React.FC<{
  img: StaticImageData;
  title: string;
  desc: string;
  url: string;
  customSize: number | undefined;
}> = ({ img, title, desc, url, customSize }) => {
  return (
    <div className={classes.linkContainer}>
      <Link href={url}>
        <div className="flex items-start">
          <Image
            src={img.src}
            alt=""
            width={customSize ? customSize : 20}
            height="20"
            className={classes.icon}
          />
          <div>
            <p className={classes.title}>{title}</p>
            <p className={classes.description}>{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DropdownItem;
