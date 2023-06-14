import React from "react";

import styles from "./content.module.scss";
import imageSite1 from "../../assets/img/imageSite1.jpg";
import imageSite2 from "../../assets/img/imageSite2.jpg";
import imageSite3 from "../../assets/img/imageSite3.jpg";

let a = [
  {
    name: "Kyiv",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-kyiv/",
    photo: `${imageSite1}`,
  },
  {
    name: "Varenuk",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-kyiv/",
    photo: `${imageSite2}`,
  },
  {
    name: "Sneakers",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-kyiv/",
    photo: `${imageSite3}`,
  },
  {
    name: "Sneakers",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-kyiv/",
    photo: `${imageSite3}`,
  },
  {
    name: "Sneakers",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-kyiv/",
    photo: `${imageSite3}`,
  },
  {
    name: "Sneakers",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-kyiv/",
    photo: `${imageSite3}`,
  },
];

const index = () => {
  return (
    <div className={styles.content_box}>
      {a.map((obj) => {
        return (
          <div className={styles.content_boxContent}>
            <h3>{obj.name}</h3>
            <a href={obj.siteUrl}>
              <img width={340} src={obj.photo} alt="Photo site" />
            </a>
            <p>
              Technology: ReactJS 18, Redux Toolkit 1.9.3, React Router 6.8.1,
              React Hooks, TypeScript, Prettier, SCSS
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default index;
