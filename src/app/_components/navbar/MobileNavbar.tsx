"use client";
import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../_assets/navbarLogo.svg";
import hamburgerIcon from "../../_assets/hamburgerIcon.svg";
import closeIcon from "../../_assets/closeIcon.svg";

import { items } from "./navbarItems";
import CalendlyPopup from "../reusables/CalendlyPopup";
import ButtonLink from "../UI/ButtonLink";

const MobileNavbar: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenuHandler = () => setIsMenuOpen(true);

  const closeMenuHandler = () => setIsMenuOpen(false);

  return (
    <div className={classes.mobileNav}>
      <Link href="/">
        <Image src={Logo} alt="DDD Invoices" width={200} height={20} />
      </Link>
      <button onClick={openMenuHandler}>
        <Image src={hamburgerIcon} alt="" />
      </button>
      {isMenuOpen && (
        <div>
          <button onClick={closeMenuHandler} className={classes.closeBtn}>
            <Image src={closeIcon} alt="" />
          </button>
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
          {/* <Button
            content="Talk to us"
            variant="primary"
            color="orange"
            className="w-80 mt-10"
          /> */}
          <CalendlyPopup className="w-80 mt-10" />
          <ButtonLink
            href="https://dddinvoices.com/login"
            content="Login"
            variant="secondary"
            color="orange"
            textColor="white"
            className="w-80 mt-6"
          />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
