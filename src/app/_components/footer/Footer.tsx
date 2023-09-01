import React from "react";
import Button from "../UI/Button";
import classes from "./Footer.module.scss";
import logo from "../../_assets/navbarLogo.svg";
import Image from "next/image";
import { items } from "../navbar/navbarItems";
import Link from "next/link";
import ButtonLink from "../UI/ButtonLink";

const Footer: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <div>
        <div className={classes.firstFooterSec}>
          <h3>Compliance made easy</h3>
          <h2 className="mb-1">Ready to get started?</h2>
          <p className="mb-5">
            Test for free. Pay when you are ready to deploy.
          </p>
          <ButtonLink
            href="https://dddinvoices.com/sign-up"
            content="Start for free"
            variant="primary"
            color="orange"
          />
        </div>
      </div>
      <div className="xl:flex gap-32 mt-16 pt-16">
        <div>
          <Image src={logo} alt="DDD Invoices" width={300} />
          <p className="my-8 xl:mb-0">
            DDD Invoices is an enterprise-grade platform delivering a secure
            infrastructure for creating, sending, receiving and storing
            electronic documents. DDD Invoices enables software providers like
            ERPs, SaaS, eCommerce, marketplaces, accounting & invoicing
            softwares, billing services and more to easily adhere to global
            invoicing compliance requirements by utilizing our powerful
            platform.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.item}>
              {item.children.length > 0 ? (
                <>
                  <span>{item.item}</span>
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.item}>
                        <Link href={child.url} className={classes.subLink}>
                          {child.item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.url} className={classes.link}>
                  {item.item}
                </Link>
              )}
            </div>
          ))}
          <Link
            href={"/enterprises-invoicing-e-invoicing-fiscalization"}
            className={classes.link}
          >
            Enterprises
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
