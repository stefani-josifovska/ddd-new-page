import React from "react";
import Hero from "@/app/_components/UI/Hero";
import Grid from "@/app/_components/UI/Grid";
import Benefits from "@/app/_components/reusables/Benefits";
import { hero, perks } from "./content";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import CustomerCta from "@/app/_components/reusables/CustomerCta";
import { Metadata } from "next";
import ButtonLink from "@/app/_components/UI/ButtonLink";
import TypingEffect from "@/app/_components/reusables/TypingEffect";

export const metadata: Metadata = {
  title: "Global invoicing & e-invoicing with 1 API for SaaS",
  description:
    "Add locally tax compliant invoicing & billing to your B2C & B2B SaaS with 1 single API.",
};

const Saas: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h2>Solution for modern software providers </h2>
          <p>
            WIth increasing tax regulations, local & international Saas
            providers are finding it difficult to comply with the technical
            specifications of each market.
          </p>
          <p>
            By connecting to our platform, SaaS solutions can comply with local
            invoicing regulations on a global scale, and provide compliant,
            value-added features to their clients in the blink of the eye.
          </p>
        </div>
        <div>slika</div>
      </Grid>
      <Benefits
        title="Enable B2C & B2B invoicing for your SaaS"
        subtitle="Benefits"
        perks={perks}
      />
      <Grid>
        <div>slika</div>
        <div>
          <h2>Completely hidden behind your UI</h2>
          <p>
            Your customers will never leave your platform, so you maintain the
            whole user experience journey. This allows you to focus on your core
            business and leave the boring part to us.
          </p>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2>Embedded finance?</h2>
          <p>
            Add invoicing UI as part of your SaaS in the shape of an embedded
            invoicing front end.
          </p>
          <p>
            Fully customizable to your branding, with your logo, correct
            language and currency, we allow for a seamless, quick integration.
          </p>
        </div>
        <div>slika</div>
      </Grid>
      <Grid>
        <div>
          <TypingEffect />
        </div>
        <div>
          <h2>Test for free, before committing</h2>
          <p>Test for free and switch to production when ready.</p>
          <p>
            Our integration is the same for all countries you require the
            invoicing for.
          </p>
          <p>See how easy it is:</p>
          <ButtonLink
            href="https://dddinvoices.com/documentation"
            content="Read the docs"
            variant="primary"
            color="orange"
          />
        </div>
      </Grid>
      <CustomerCta />
    </>
  );
};

export default Saas;
