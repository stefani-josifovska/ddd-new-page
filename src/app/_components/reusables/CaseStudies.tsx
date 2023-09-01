import React from "react";
import classes from "./CaseStudies.module.scss";
import trebjesaImg from "./caseStudyContent/trebjesa.svg";
import sapImg from "./caseStudyContent/sap.svg";
import Image from "next/image";

const CaseStudies: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <h3>Case studies</h3>
      <h2>Read our customer testimonials</h2>
      <div>
        <a href="https://dddinvoices.com/learn/trebjesa-ddd-invoices-solution/">
          <div className={classes.content}>
            <div className="flex">
              <Image src={trebjesaImg} alt="trebjesa" />
              <Image src={sapImg} alt="SAP" />{" "}
            </div>
            <h4>
              DDD Invoices managed to quickly lend a helping hand when a SAP
              integrating partner required a compliant platform for a client.
            </h4>
            <p>
              <span>-Integrators,</span> Trebjesa brewery & SAP
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;
