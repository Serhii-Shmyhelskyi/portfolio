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
