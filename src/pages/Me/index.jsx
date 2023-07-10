import React, { useState } from "react";

import FsLightbox from "fslightbox-react";

import styles from "./me.module.scss";
import meKPI from "../../assets/img/me_kpi.jpeg";
import mePaton from "../../assets/img/me_paton.jpg";
import { NTKPhoto } from "../../components/data/data";
import { CinaPhoto } from "../../components/data/data";

const Me = () => {
  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [indexPhoto, setIndexPhoto] = useState(0);
  const [indexPhoto2, setIndexPhoto2] = useState(0);

  const openLightbox = (index) => {
    setIndexPhoto(index); // Встановлюємо індекс зображення
    setToggler(!toggler);
  };
  const openLightbox2 = (index2) => {
    setIndexPhoto2(index2); // Встановлюємо індекс зображення
    setToggler2(!toggler2);
  };

  return (
    <div className={styles.me}>
      <h2>My IT road</h2>
      <p>
        Hello, my name is Serhii Shmyhelskiy, let me introduce my career path. I
        have been interested in programming for a long time, I began my journey
        by studying Pascale and HTML while still at school. However, he
        seriously took up the study of programming while already working as an
        engineer at the Scientific and technical complex "Institute of Electric
        Welding. E. O. Paton". At first, he often studied and made projects
        using HTML and CSS. He took courses. Then he studied JS, used Gulp, Git.
        and now I make projects based on the React.Js legend. I supplement my
        knowledge and learn new technologies.
      </p>
      <h2>Education</h2>
      <div className={styles.me_kpi}>
        <div className={styles.me_educationKPI}>
          <p>
            In 2016, I graduated from National Technical University of Ukraine
            “Igor Sikorsky Kyiv Polytechnic Institute” with a master's degree.
          </p>
          <p>Faculty:"Welding"</p>
          <p>Department: "Electric welding installations" </p>
          <p>Specialty"Welding installations"</p>
          <p>Wrote the following articles for the conference:</p>
          <div>
            <div>
              <a href="http://zv.kpi.ua/images/stories/Konferenc/konf_zv_2015.pdf ">
                <p className={styles.kpi_st1}>
                  - Multi-parameter magnetic control of the stress-strain state
                  welded
                </p>
              </a>
            </div>
            <div>
              <a href="http://zv.kpi.ua/images/stories/Konferenc/konf_zv_2016.pdf ">
                <p className={styles.kpi_st2}>
                  - Compensation of the imbalance of the magneto-anisotropic
                  converter
                </p>
              </a>
            </div>
          </div>
        </div>
        <img src={meKPI} alt="KPI" />
      </div>
      <div className={styles.me_paton}>
        <img className={styles.me_patonImg} src={mePaton} alt="Paton" />
        <div className={styles.me_educationPaton}>
          <p>
            In 2021, I graduated from Institute of Electric Welding with a
            postgraduate..
          </p>
          <p>Specialty"Material science"</p>
          <p>Wrote the following articles:</p>
          <div>
            <div>
              <a href="https://doi.org/10.15407/as2019.12.01">
                <p className={styles.kpi_st1}>
                  - Influence of thermal cycle of surfacing on mechanical
                  properties and resistance to brittle fracture of haz metal of
                  rail wheel steel M76
                </p>
              </a>
            </div>
            <div>
              <a href="https://doi.org/10.37434/as2020.11.01">
                <p className={styles.kpi_st2}>
                  - Influence of composition of deposited metal and
                  thermodeformation cycle of surfacing on stability of joints of
                  wheel steels with dispersion nitride and solid-soluble
                  hardening to cold cracks formation
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2>Works:</h2>
      <h2>
        My works in Scientific and technical complex "Institute of Electric
        Welding. E. O. Paton”
      </h2>
      <div className={styles.me_ntk}>
        {NTKPhoto.map((item, i) => (
          <div key={i} onClick={() => openLightbox(i + 1)}>
            <img className={styles.me_ntkPhoto} src={item} alt={"NtkPhoto"} />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler} sources={NTKPhoto} slide={indexPhoto} />
      <h2>My works in Xianchu energy development group Itd</h2>

      <div className={styles.me_cina}>
        {CinaPhoto.map((item, i) => (
          <div key={i} onClick={() => openLightbox2(i + 1)}>
            <img className={styles.me_cinaPhoto} src={item} alt={"CinaPhoto"} />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler2} sources={CinaPhoto} slide={indexPhoto2} />
    </div>
  );
};

export default Me;
