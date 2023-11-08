import React, { FC } from "react";

import Logo from "../../assets/img/logo.jpg";
import Photo from "../../assets/img/serhii.jpg";

import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <>
      <div className={styles.header_top}>
        <div className={styles.header_topLogo}>
          <Link to="/portfolio/">
            <img width={85} src={Logo} alt="Logo" />
          </Link>
        </div>
        <h1>Portfolio SHM</h1>
        <div className={styles.header_list}>
          <ul>
            <div>
              <a href="tel:+380966265268">
                <li>
                  <img
                    src="https://img.icons8.com/ios-filled/256/phone.png"
                    alt="email"
                  />
                  <p className={styles.header_gh}>+380966265268</p>
                </li>
              </a>
              <a href="mailto:shmserhi@gmail.com">
                <li>
                  <img
                    src="https://img.icons8.com/external-nawicon-glyph-nawicon/256/external-email-communication-nawicon-glyph-nawicon.png"
                    alt="phone"
                  />
                  <p className={styles.header_gh}>shmserhi@gmail.com</p>
                </li>
              </a>
            </div>
            <div className={styles.header_listContact}>
              <a href="https://github.com/Serhii-Shmyhelskyi" target="_blank">
                <li>
                  <img
                    src="https://img.icons8.com/?size=512&id=12599&format=png"
                    alt="gitHub"
                  />
                  <p className={styles.header_gh}>github</p>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/serhii-shmyhelskyi-99ba02200/"
                target="_blank">
                <li>
                  <img
                    src="https://img.icons8.com/?size=512&id=8808&format=png"
                    alt="linkedin"
                  />
                  <p className={styles.header_gh}>Linkedin</p>
                </li>
              </a>
            </div>
          </ul>
          <a
            className={styles.header_a}
            href="https://www.linkedin.com/in/serhii-shmyhelskyi-99ba02200/"
            target="_blank">
            <img width={70} src={Photo} alt="Serhii's photo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
