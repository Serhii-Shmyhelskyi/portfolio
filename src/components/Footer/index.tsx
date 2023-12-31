import React, { FC } from "react";

import { pageUp } from "../function/function";

import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <>
      <div className={styles.footer} onClick={pageUp}>
        © 2023 Shm Inc. Designed by Serhii Shmyhelskyi
      </div>
    </>
  );
};

export default Footer;
