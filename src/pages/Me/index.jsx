import React, { useState } from "react";

import FsLightbox from "fslightbox-react";

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
  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [indexPhoto, setIndexPhoto] = useState(0);
  const [indexPhoto2, setIndexPhoto2] = useState(0);

  const NTKPhoto = [
    { name: NTK1, id: 0 },
    { name: NTK2, id: 1 },
    { name: NTK3, id: 2 },
    { name: NTK4, id: 3 },
    { name: NTK5, id: 4 },
    { name: NTK6, id: 5 },
  ];

  const CinaPhoto = [
    { name: China1, id: 0 },
    { name: China2, id: 1 },
    { name: China3, id: 2 },
    { name: China4, id: 3 },
    { name: China5, id: 4 },
    { name: China6, id: 5 },
    { name: China7, id: 6 },
    { name: China8, id: 7 },
    { name: China9, id: 8 },
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
      <h2>
        My works in Scientific and technical complex "Institute of Electric
        Welding. E. O. Paton”
      </h2>
      <div className={styles.me_ntk}>
        {NTKPhoto.map((item) => (
          <div key={item.id} onClick={() => setIndexPhoto(item.id)}>
            <img
              className={styles.me_ntkPhoto}
              src={item.name}
              alt={"NtkPhoto"}
              key={indexPhoto}
              onClick={() => setToggler(!toggler)}
            />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler} sources={[NTKPhoto[indexPhoto].name]} />
      <h2>My works in Xianchu energy development group Itd</h2>

      <div className={styles.me_cina}>
        {CinaPhoto.map((item) => (
          <div key={item.id} onClick={() => setIndexPhoto2(item.id)}>
            <img
              className={styles.me_cinaPhoto}
              src={item.name}
              alt={"CinaPhoto"}
              key={indexPhoto2}
              onClick={() => setToggler2(!toggler2)}
            />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler2} sources={[CinaPhoto[indexPhoto2].name]} />
    </div>
  );
};

export default Me;
