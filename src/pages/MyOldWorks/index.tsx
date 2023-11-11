import React, { FC, useState } from "react";

import FsLightbox from "fslightbox-react";

import styles from "./myoldWorks.module.scss";
import { NTKPhoto } from "../../components/data/data";
import { CinaPhoto } from "../../components/data/data";

const myOldWork: FC = () => {
  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [indexPhoto, setIndexPhoto] = useState(0);
  const [indexPhoto2, setIndexPhoto2] = useState(0);

  const openLightbox = (index: number) => {
    setIndexPhoto(index); // Встановлюємо індекс зображення
    setToggler((toggler) => !toggler);
  };
  const openLightbox2 = (index2: number) => {
    setIndexPhoto2(index2); // Встановлюємо індекс зображення
    setToggler2((toggler2) => !toggler2);
  };

  return (
    <div className={styles.me}>
      <h2>
        My work in Scientific and technical complex "Institute of Electric
        Welding. E. O. Paton”
      </h2>
      <p>
        Participated in the extended service life of the Rivne and Khmelnitsky
        NPP units. Performed calculations for static, cyclic strength and
        seismic resistance of pipelines and equipment. Performed calculations to
        replace pipeline fittings.
      </p>
      <h3>
        Examples of my work in Scientific and technical complex "Institute of
        Electric Welding. E. O. Paton”
      </h3>
      <div className={styles.me_ntk}>
        {NTKPhoto.map((item, i) => (
          <div key={i} onClick={() => openLightbox(i + 1)}>
            <img className={styles.me_ntkPhoto} src={item} alt={"NtkPhoto"} />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler} sources={NTKPhoto} slide={indexPhoto} />
      <h2>My work in Xianchu energy development group Itd</h2>
      <p>
        I developed remote modules and complexes for nuclear power plants (3D
        models, drawings and explanatory notes). Participated in the
        development, improvement and description of welding processes.
      </p>
      <h3>Examples of my work Xianchu energy development group Itd”</h3>
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

export default myOldWork;
