import React from "react";
import Hero from "@/app/_components/UI/Hero";
import { hero, perks } from "./content";
import Grid from "@/app/_components/UI/Grid";
import Benefits from "../../../_components/reusables/Benefits";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import CustomerCta from "@/app/_components/reusables/CustomerCta";
import img1 from "./img1.png";
import img2 from "./img2.png";
import ImgContainer from "@/app/_components/UI/ImgContainer";
import { Metadata } from "next";
import ButtonLink from "@/app/_components/UI/ButtonLink";
import TypingEffect from "@/app/_components/reusables/TypingEffect";

export const metadata: Metadata = {
  title: "Tax compliant invoicing & eProcurement for marketplaces with 1 API",
  description:
    "Automate & optimize billing & invoicing for your marketplace with 1 global invoicing API.",
};

const Marketplace: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h2>Power up your marketplace with compliance features</h2>
          <p>
            Invoicing for multinational market places needs to be precise and
            needs to adhere to many different local tax requirements.
          </p>
          <p>
            Seamlessly integrate our API into your existing platform within 1-3
            days and grant your marketplace locally compliant billing,
            invoicing, e-invoicing, fiscalization and other capabilities.
          </p>
        </div>
        <div>slika</div>
      </Grid>
      <Benefits
        title="Invoice on behalf of your clients while adhering to local requirements"
        subtitle="Benefits"
        perks={perks}
      />
      <Grid>
        <div>
          <ImgContainer img={img1} />
        </div>
        <div>
          <h2>Created to support you & your tenants internationally</h2>
          <p>
            Local language and currencies - a customized experience with ease of
            understanding. Generate e-invoices & automatically report them to
            tax authorities with every sale.
          </p>
          <p>
            Supporting you and your tenants on a road to expansion as the
            complexity of new countries, volume of invoices & problems of more
            tenants arise.
          </p>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2>Unleash the power of the smart marketplace</h2>
          <p>
            With one simple integration, your marketplace can streamline the
            whole invoicing process, enabling smooth data exchange between the
            buyer, seller & all other partners.
          </p>
          <p>
            Minimize the risk of penalties, fines and audits, providing a peace
            of mind to your customers.
          </p>
        </div>
        <div>
          <ImgContainer img={img2} />
        </div>
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

export default Marketplace;
