import React, { useState } from "react";
import classnames from "classnames";

import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.scss";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  let itemMenus = [
    { name: "Home", link: "" },
    { name: "About me", link: "me" },
    // { name: "Blog", link: "blog" },
    // { name: "Contacts", link: "contacts" },
  ];

  let location = useLocation();

  let isActiveMenu = (button) =>
    location.pathname == "/portfolio/" + button.link &&
    "/portfolio" + button.link;
  // console.log(location.pathname);

  return (
    <>
      <div
        className={styles.menu_btn}
        onClick={() => setToggleMenu(!toggleMenu)}>
        <div className={styles.menu_btnSpan}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={toggleMenu ? styles.menu : styles.menu__toggleDown}>
        <ul>
          {itemMenus.map((obj, i) => {
            return (
              <Link to={obj.link} key={i}>
                <li
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
    </>
  );
};

export default Menu;

{
  /* <li className={isActiveMenu(obj) ? `${styles.active}` : ""}></li> */
}
