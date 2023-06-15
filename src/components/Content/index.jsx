import React from "react";

import styles from "./content.module.scss";
import imageSite1 from "../../assets/img/imageSite1.jpg";
import imageSite2 from "../../assets/img/imageSite2.jpg";
import imageSite3 from "../../assets/img/imageSite3.jpg";
import imageSite4 from "../../assets/img/imageSite4.jpg";
import imageSite5 from "../../assets/img/imageSite5.jpg";
import imageSite6 from "../../assets/img/imageSite6.jpg";

let a = [
  {
    name: "Kyiv",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-kyiv/",
    photo: `${imageSite1}`,
    text: "ReactJS 18, Redux Toolkit 1.9.3, React Router 6.8.1, TypeScript, Prettier, SCSS",
  },
  {
    name: "Varenuk",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-varenuk/",
    photo: `${imageSite2}`,
    text: "ReactJS 18, Redux Toolkit 1.9.3, TypeScript, React Router 6.8.1, Axios + Fetch, React Hooks, Prettier, SCSS",
  },
  {
    name: "Sneakers",
    siteUrl: "https://serhii-shmyhelskyi.github.io/react-sneakers/",
    photo: `${imageSite3}`,
    text: "ReactJS 18, React Router v6, Axios + Fetch, React Hooks, React Context, Prettier, SCSS",
  },
  {
    name: "Metro",
    siteUrl: "https://serhii-shmyhelskyi.github.io/metro-js-array/",
    photo: `${imageSite4}`,
    text: "JS, CSS, JS Array, Git",
  },
  {
    name: "Surf",
    siteUrl: "https://serhii-shmyhelskyi.github.io/surf/app/index.html",
    photo: `${imageSite5}`,
    text: "JS, SCSS, CSS Animations, Gulpf, Git",
  },
  {
    name: "Hungry-menu",
    siteUrl: "https://serhii-shmyhelskyi.github.io/hungry-menu/app/index.html",
    photo: `${imageSite6}`,
    text: "JS, SCSS, CSS Animations, Gulpf, Git",
  },
];

const index = () => {
  return (
    <>
      <div className={styles.content_topText}>
        <h2>My works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur
          ab voluptatem quis excepturi saepe, velit quia delectus fugit a porro
          architecto ipsam cupiditate vitae tempora corporis, nihil consequatur
          aliquam.
        </p>
      </div>

      <div className={styles.content_box}>
        {a.map((obj) => {
          return (
            <div className={styles.content_boxContent}>
              <h3>{obj.name}</h3>
              <a href={obj.siteUrl}>
                <img src={obj.photo} alt="Photo site" />
              </a>
              <div className={styles.content_boxText}>
                <h3>Technology:</h3>
                <p>{obj.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
