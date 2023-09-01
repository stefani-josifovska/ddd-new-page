import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../_assets/navbarLogo.svg";
import Image from "next/image";
import { items } from "./navbarItems";
import Link from "next/link";
import Background from "./Background";
import MobileNavbar from "./MobileNavbar";
import ButtonLink from "../UI/ButtonLink";
import CalendlyPopup from "../reusables/CalendlyPopup";

const Navbar: React.FC<{}> = () => {
  return (
    <nav className={classes.container}>
      <Background />
      <div className={classes.desktopNav}>
        <Link href="/">
          <Image src={Logo} alt="DDD Invoices" width={200} height={20} />
        </Link>
        <ul>
          {items.map((item, index) => {
            if (item.children.length > 0) {
              return (
                <li
                  key={`navbar-item-${index}`}
                  className={classes.navDropdownContainer}
                >
                  <button id={`dropdown-button-${index}`}>{item.item}</button>
                  <div
                    className={classes.toggleDisp}
                    aria-labelledby={`dropdown-button-${index}`}
                  >
                    <ul>
                      {item.children.map((menuItem, itemIndex) => (
                        <li key={`link-${index}-${itemIndex}`}>
                          <Link href={menuItem.url}>{menuItem.item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return (
              <li key={`navbar-item-${index}`}>
                <Link href={item.url}>{item.item}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <CalendlyPopup />
          <ButtonLink
            href="https://dddinvoices.com/login"
            content="Login"
            variant="secondary"
            color="white"
            textColor="white"
            className="w-6"
          />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
