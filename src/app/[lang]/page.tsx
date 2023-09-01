import React from "react";
import LandingHero from "../_components/hero/LandingHero";
import TrustedBy from "../_components/homepage/TrustedBy";
import OurCustomers from "../_components/homepage/OurCustomers";
import Prefooter from "../_components/prefooter/Prefooter";
import Grid from "../_components/UI/Grid";
import classes from "../_components/homepage/Homepage.module.scss";
import Image from "next/image";
import NetworkImg from "../_components/homepage/network.svg";
import QuestionsContainer from "../_components/questions/QuestionsContainer";
import Carousel from "../_components/reusables/Carousel";
import Link from "next/link";
import CaseStudies from "../_components/reusables/CaseStudies";
import ButtonLink from "../_components/UI/ButtonLink";

export default function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <LandingHero />
      <TrustedBy />
      <Grid>
        <div>
          <h3>Compliance problems</h3>
          <h2>
            Invoicing for{" "}
            <b>
              <span className={classes.orangeText}>global</span> software
              providers & companies
            </b>{" "}
            is a challenge
          </h2>
          <p>
            There are different e-invoice & fiscalization (digital reporting)
            standards, changing tax regulations and various VAT requirements in
            every country.
          </p>
          <p>
            For either a local independent software vendor or international
            company that requires multiple integrations, staying compliant is
            complex.
          </p>
        </div>
        <div className="h-100">
          <Carousel />
          <div className="mt-2 text-right">
            <Link href="https://dddinvoices.com/learn/">
              More countries &gt;
            </Link>
          </div>
        </div>
      </Grid>
      <Grid>
        <div>
          <h3>Solution</h3>
          <h2>
            One platform, <b>instant compliance,</b> multiple countries
          </h2>
          <p>
            With one single invoicing API integration to our platform, your
            software instantly gains the ability of compliant invoicing &
            e-invoicing according to local tax regulations and international
            requirements.
          </p>
          <ButtonLink
            href="/platform-e-invoicing-invoicing-fiscalization-api"
            content="More about our platform >"
            variant="primary"
            color="orange"
          />
        </div>
        <div className="flex justify-center xl:justify-end mt-10 xl:mt-0">
          <Image src={NetworkImg} alt="DDD Invoices network" />
        </div>
      </Grid>
      <QuestionsContainer page="homepage" />
      <OurCustomers />
      <section className={classes.container}>
        <Grid>
          <div>
            <h3>Invoicing reimagined</h3>
            <h2>
              API-first solution to overcome <b>global invoicing challenges</b>
            </h2>
            <p>Challenges:</p>
            <ul>
              <li>
                Keeping up with changing local tax & invoicing regulations
              </li>
              <li>Different standards for digital reporting & e-invoicing</li>
              <li>Varying sources of inaccurate tax data</li>
            </ul>
            <br />
            <p>Solution:</p>
            <ul>
              <li>
                One-connection for global VAT invoicing, digital reporting &
                e-invoicing
              </li>
              <li>Effortlessly up-to date with the newest tax regulations</li>
              <li>Simple, fast & universal integration</li>
            </ul>
            <ButtonLink
              href="https://dddinvoices.com/sign-up"
              content="Start for free"
              variant="primary"
              color="orange"
            />
          </div>
          <div>slika</div>
        </Grid>
      </section>
      <CaseStudies />
      <Prefooter title="What sets DDD Invoices apart" />
    </>
  );
}