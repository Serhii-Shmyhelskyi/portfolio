import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/menuSlice";

import styles from "./menu.module.scss";

const menuArr = [
  { name: "Home", link: "" },
  { name: "About me", link: "me" },
  { name: "Blog", link: "blog" },
  { name: "Contacts", link: "contacts" },
];

const Menu = () => {
  const menuState = useSelector((state) => state.menu.value);
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <button onClick={() => setToggleMenu(!toggleMenu)}>MENU</button>
      <div className={toggleMenu ? styles.menu : styles.menu__toggleDown}>
        <ul>
          {menuArr.map((obj, i) => {
            return (
              <li
                key={i}
                onClick={() => dispatch(setCategoryId(i))}
                className={menuState === i ? `${styles.active}` : ""}>
                <Link to={obj.link}>
                  <h3>{obj.name}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
