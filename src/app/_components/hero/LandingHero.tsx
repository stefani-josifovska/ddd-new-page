import React from "react";
import classes from "./LandingHero.module.scss";
// import { content } from "./translations";
import Image from "next/image";
import worldImg from "../../_assets/hero_globe.svg";
import ButtonLink from "../UI/ButtonLink";

const LandingHero: React.FC<{}> = () => {
  //   const onStartFree = () => {};

  return (
    <section className={classes.container}>
      <div>
        <h1>
          Global <br />
          <span className={classes.unbreakableString}>e-Invoicing</span>{" "}
          Platform
        </h1>
        <p>
          Enable global e-invoicing & real-time reporting for your software and
          comply with local tax requirements with a single API integration in
          just a couple of hours.
        </p>
        <ButtonLink
          href="https://dddinvoices.com/sign-up"
          content="Start for free"
          variant="primary"
          color="orange"
        />
      </div>
      <div className={classes.imgContainer}>
        <Image src={worldImg} alt=""></Image>
      </div>
    </section>
  );
};

export default LandingHero;
