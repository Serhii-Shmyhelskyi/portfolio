import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/menuSlice";

import styles from "./menu.module.scss";

const menuArr = ["Home", "About me", "Blog", "Contacts"];

const Menu = () => {
  const menuState = useSelector((state) => state.menu.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.menu}>
      <ul>
        {menuArr.map((obj, i) => {
          return (
            <li
              key={i}
              onClick={() => dispatch(setCategoryId(i))}
              className={menuState === i ? `${styles.active}` : ""}>
              <h3>{obj}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
