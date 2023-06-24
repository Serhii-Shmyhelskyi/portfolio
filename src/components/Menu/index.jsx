import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/menuSlice";

import styles from "./menu.module.scss";

const Menu = () => {
  const menuState = useSelector((state) => state.menu.value);
  const menuArr = useSelector((state) => state.menu.itemMenus);
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <button onClick={() => setToggleMenu(!toggleMenu)}>MENU</button>
      <div className={toggleMenu ? styles.menu : styles.menu__toggleDown}>
        <ul>
          {menuArr.map((obj, i) => {
            return (
              <Link to={obj.link}>
                <li
                  key={i}
                  onClick={() => dispatch(setCategoryId(i))}
                  className={menuState === i ? `${styles.active}` : ""}>
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
