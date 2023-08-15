import React, { useState } from "react";
import classnames from "classnames";

import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.scss";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const AllActive = (toggleMenu) => {
    setToggleMenu(!toggleMenu);
    toggleMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  };

  let toogle = !toggleMenu && styles.menu__toggleRight;

  let itemMenus = [
    { name: "Home", link: "/portfolio/", pathnameId: "/portfolio/" },
    { name: "About me", link: "me", pathnameId: "/portfolio/me" },
    // { name: "Blog", link: "blog" },
    // { name: "Contacts", link: "contacts" },
  ];

  let location = useLocation();

  let isActiveMenu = (button) => location.pathname === button.pathnameId;

  return (
    <>
      <div className={toogle}>
        <div className={styles.menu__content}>
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
        </div>
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
