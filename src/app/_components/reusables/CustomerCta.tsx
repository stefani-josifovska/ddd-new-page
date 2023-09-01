import React from "react";
import classes from "./MiddleCta.module.scss";
import ButtonLink from "../UI/ButtonLink";

const CustomerCta: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <h2>
        Start with the DDD Invoices platform and enable e-invoicing &
        fiscalization for your ERP today.
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

export default CustomerCta;
