import React, { FC, useState } from "react";
import classnames from "classnames";

import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.scss";
import { pageUp } from "../function/function";

const Menu: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const AllActive = (toggleMenu: boolean) => {
    setToggleMenu((actualTogleMenu) => !actualTogleMenu);
    window.matchMedia("(max-width: 450px)").matches && toggleMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
    pageUp();
  };

  let toogle = !toggleMenu && styles.menu__toggleRight;

  type menuItem = {
    name: string;
    link: string;
    pathnameId: string;
  };

  let itemMenus = [
    { name: "Home", link: "/portfolio/", pathnameId: "/portfolio/" },
    { name: "About me", link: "me", pathnameId: "/portfolio/me" },
    // { name: "Blog", link: "blog" },
    // { name: "Contacts", link: "contacts" },
  ];

  let location = useLocation();

  let isActiveMenu = (button: menuItem) =>
    location.pathname === button.pathnameId;

  return (
    <>
      <div className={toogle}>
        <nav className={styles.menu__content}>
          <ul>
            {itemMenus.map((obj, i) => {
              return (
                <Link to={obj.link} key={i}>
                  <li
                    onClick={() => AllActive(toggleMenu)}
                    className={classnames({
                      [styles.active]: isActiveMenu(obj),
                    })}>
                    <h3>{obj.name}</h3>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>

      <div
        className={toggleMenu ? styles.menu__wrapper : styles.menu__wrapperDark}
        onClick={() => AllActive(toggleMenu)}>
        <div className={styles.menu_btn}>
          {toggleMenu ? (
            <div className={styles.menu_btnOpen}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className={styles.menu_btnClose}></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
