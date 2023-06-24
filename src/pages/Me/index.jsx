import React, { useState } from "react";

import styles from "./me.module.scss";

import meKPI from "../../assets/img/me_kpi.jpeg";
import mePaton from "../../assets/img/me_paton.jpg";

import NTK1 from "../../assets/img/NTK1.jpg";
import NTK2 from "../../assets/img/NTK2.jpg";
import NTK3 from "../../assets/img/NTK3.jpg";
import NTK4 from "../../assets/img/NTK4.jpg";
import NTK5 from "../../assets/img/NTK5.jpg";
import NTK6 from "../../assets/img/NTK6.jpg";

import China1 from "../../assets/img/Cina1.jpg";
import China2 from "../../assets/img/Cina2.jpg";
import China3 from "../../assets/img/Cina3.jpg";
import China4 from "../../assets/img/Cina4.jpg";
import China5 from "../../assets/img/Cina5.jpg";
import China6 from "../../assets/img/Cina6.jpg";
import China7 from "../../assets/img/Cina7.jpg";
import China8 from "../../assets/img/Cina8.jpg";
import China9 from "../../assets/img/Cina9.jpg";

const Me = () => {
  const NTKPhoto = [NTK1, NTK2, NTK3, NTK4, NTK5, NTK6];

  const CinaPhoto = [
    China1,
    China2,
    China3,
    China4,
    China5,
    China6,
    China7,
    China8,
    China9,
  ];

  return (
    <div className={styles.me}>
      <h2>
        Hello, my name is Serhii Shmyhelskiy, let me introduce my career path
      </h2>
      <h2>Education</h2>
      <div className={styles.me_kpi}>
        <div className={styles.me_educationKPI}>
          <p>
            In 2016, I graduated from NTUU "KPI" E. O. Paton with a master's
            degree.
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
      <h2>
        My works in Scientific and technical complex "Institute of Electric
        Welding. E. O. Paton”
      </h2>
      <div className={styles.me_ntk}>
        {NTKPhoto.map((obj, i) => {
          return (
            <div>
              <img className={styles.me_ntkPhoto} src={obj} alt="NTKPhoto" />
            </div>
          );
        })}
      </div>
      <h2>My works in Xianchu energy development group Itd</h2>
      <div className={styles.me_cina}>
        {CinaPhoto.map((obj, i) => {
          return (
            <div key={i}>
              <img className={styles.me_cinaPhoto} src={obj} alt="ChinaPhoto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Me;
