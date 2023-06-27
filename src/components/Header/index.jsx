import React from "react";

import Logo from "../../assets/img/logo.jpg";
import Photo from "../../assets/img/serhii.jpg";

import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/menuSlice";

const Header = () => {
  const menuState = useSelector((state) => state.menu.itemMenus);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.header_top}>
        <Link to={menuState[0].link}>
          <div
            className={styles.header_topLogo}
            onClick={() => dispatch(setCategoryId(0))}>
            <img width={120} src={Logo} alt="Logo" />
          </div>
        </Link>
        <h1>Portfolio SHM</h1>
        <div className={styles.header_list}>
          <ul>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/256/phone.png"
                alt="email"
              />
              <a href="tel:+380966265268">+380966265268</a>
            </li>
            <li>
              <img
                src="https://img.icons8.com/external-nawicon-glyph-nawicon/256/external-email-communication-nawicon-glyph-nawicon.png"
                alt="phone"
              />
              <a href="mailto:shmserhi@gmail.com">shmserhi@gmail.com</a>
            </li>
            <a href="https://github.com/Serhii-Shmyhelskyi">
              <li>
                <img
                  src="https://img.icons8.com/?size=512&id=12599&format=png"
                  alt="gitHub"
                />
                <a href="https://github.com/Serhii-Shmyhelskyi">github</a>
              </li>
            </a>
          </ul>
          <a href="https://github.com/Serhii-Shmyhelskyi">
            <img width={120} src={Photo} alt="Serhii's photo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
