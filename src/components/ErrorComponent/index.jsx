import React from "react";
import styles from "./errorComponent.module.scss";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Нічого не знайдено</h1>
      <p className={styles.description}>
        Нажаль данної сторінки не існує на цьому сайті
      </p>
    </div>
  );
};

export default ErrorComponent;
