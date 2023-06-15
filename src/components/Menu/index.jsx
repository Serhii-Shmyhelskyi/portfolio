import React, { useState } from "react";

import styles from "./menu.module.scss";

const menu = ["Home", "Blog", "About me", "Contacts"];

const Menu = () => {
  const [value, setValue] = useState(0);
  const onChangeCategory = function (value) {
    setValue(value);
  };
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj, i) => {
          return (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? `${styles.active}` : ""}>
              <h3>{obj}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
