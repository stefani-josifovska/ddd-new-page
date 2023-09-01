import React from "react";
import classes from "./MiddleCta.module.scss";
import ButtonLink from "../UI/ButtonLink";

const MiddleCta: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <h3>
        Your developers do not need to know anything about VAT compliance,
        reporting or e-invoicing standard
      </h3>
      <h2>
        One single integration with our platform takes care of all of your
        current & future invoicing needs, everywhere.
      </h2>
      <ButtonLink
        href="https://dddinvoices.com/sign-up"
        content="Start free intergration"
        variant="primary"
        color="orange"
      />
    </section>
  );
};

export default MiddleCta;
