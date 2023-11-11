import React, { FC } from "react";

import styles from "./me.module.scss";
import meKPI from "../../assets/img/me_kpi.jpeg";
import mePaton from "../../assets/img/me_paton.jpg";

const Me: FC = () => {
  return (
    <div className={styles.me}>
      <h2>My IT road</h2>
      <p>
        Hello, my name is Serhii Shmyhelskiy. Implemented projects by attending
        HTML and CSS courses (used JS, SCSS, CSS Animations, Gulp technologies).
        I developed a photographer's portfolio site. Developed my portfolio site
        using ReactJS, Redux Toolkit, RTK Query, React Router 6, Axios,
        TypeScript, SCSS. Completed pet projects Varenuk store (ReactJS, Redux
        Toolkit, TypeScript, React Router 6, Axios, SCSS), Sneakers store
        (ReactJS, React Router 6, Axios, React Context, SCSS), website with a
        quiz What kind of mushroom are you? (ReactJS, Redux Toolkit, React
        Router 6, Axios, SCSS), site about Kyiv (ReactJS, Redux Toolkit, React
        Router 6, TypeScript, SCSS), to do list (ReactJS, Axios, SCSS).
      </p>
      <h2>Education</h2>
      <div className={styles.me_kpi}>
        <div className={styles.me_educationKPI}>
          <p>
            In 2016, I graduated from National Technical University of Ukraine
            “Igor Sikorsky Kyiv Polytechnic Institute” with a master's degree.
          </p>
          <p>Faculty: "Welding"</p>
        </div>
        <img src={meKPI} alt="KPI" />
      </div>
      <div className={styles.me_paton}>
        <img className={styles.me_patonImg} src={mePaton} alt="Paton" />
        <div className={styles.me_educationPaton}>
          <p>
            In 2021, I graduated from E.O. Paton Electric Welding Institute with
            a postgraduate.
          </p>
          <p>Specialty"Material science"</p>
        </div>
      </div>
    </div>
  );
};

export default Me;
