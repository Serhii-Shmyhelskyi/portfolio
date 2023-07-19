import React, { useState } from "react";
import classnames from "classnames";

import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.scss";

const Menu = ({ isActive }) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const AllActive = (toggleMenu) => {
    setToggleMenu(!toggleMenu);
    isActive(toggleMenu);
  };

  let itemMenus = [
    { name: "Home", link: "/portfolio/", pathnameId: "/portfolio/" },
    { name: "About me", link: "me", pathnameId: "/portfolio/me" },
    // { name: "Blog", link: "blog" },
    // { name: "Contacts", link: "contacts" },
  ];

  let location = useLocation();

  let isActiveMenu = (button) => location.pathname === button.pathnameId;
  return (
    <div className={!toggleMenu ? styles.menuWrapper : styles.menuWrapperDark}>
      <div className={styles.menu_btn} onClick={() => AllActive(toggleMenu)}>
        {toggleMenu ? (
          <div className={styles.menu_btnSpan}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <div className={styles.menu_btnSpan2}></div>
        )}
      </div>

      <div
        className={
          toggleMenu ? styles.menu__toggleDownNull : styles.menu__toggleDown
        }>
        <div className={styles.menu}>
          <ul>
            {itemMenus.map((obj, i) => {
              return (
                <Link to={obj.link} key={i}>
                  <li
                    onClick={() => setToggleMenu(!toggleMenu)}
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
    </div>
  );
};

export default Menu;
