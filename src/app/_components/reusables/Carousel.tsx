"use client";
import React, { useState } from "react";
import classes from "./Carousel.module.scss";
import semiCircle from "../../_assets/semiCircle.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { countries } from "./carouselImages/carouselData";

const Carousel: React.FC<{}> = () => {
  const [chosenCountry, setChosenCountry] = useState<number>(0);
  const [otherCountries, setOtherCountries] = useState<{
    prev: number;
    next: number;
  }>({ prev: countries.length - 1, next: 1 });

  const onChooseCountryHandler = (direction: string) => {
    if (direction === "prev") {
      const newChosenCountry =
        (chosenCountry - 1 + countries.length) % countries.length;
      setChosenCountry(newChosenCountry);

      const newPrev =
        (otherCountries.prev - 1 + countries.length) % countries.length;
      const newNext =
        (otherCountries.next - 1 + countries.length) % countries.length;
      setOtherCountries({ prev: newPrev, next: newNext });
    } else if (direction === "next") {
      const newChosenCountry = (chosenCountry + 1) % countries.length;
      setChosenCountry(newChosenCountry);

      const newPrev = (otherCountries.prev + 1) % countries.length;
      const newNext = (otherCountries.next + 1) % countries.length;
      setOtherCountries({ prev: newPrev, next: newNext });
    }
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.imgCont}
        style={{ background: `url(${countries[chosenCountry].image.src})` }}
      ></div>
      <div className={classes.countryCont}>
        <div className={classes.firstLayer}>
          <Link href={countries[chosenCountry].link}>
            <h4>{countries[chosenCountry].country}</h4>
          </Link>
          <Link href={countries[chosenCountry].link}>
            {countries[chosenCountry].title}
          </Link>
        </div>
        <div className={classes.secondLayer}>
          <button onClick={() => onChooseCountryHandler("prev")}>
            {countries[otherCountries.prev].country}
          </button>
          <Image src={semiCircle} alt="" />
          <button onClick={() => onChooseCountryHandler("next")}>
            {countries[otherCountries.next].country}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
