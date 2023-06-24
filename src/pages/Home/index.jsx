import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "../../redux/slices/contentSlice";

import { Pagination } from "../../components/Pagination";
import { Skeleton } from "../../components/Skeleton/Skeleton";

import styles from "./content.module.scss";

import photoSite1 from "../../assets/img/imageSite1.jpg";
import photoSite2 from "../../assets/img/imageSite2.jpg";
import photoSite3 from "../../assets/img/imageSite3.jpg";
import photoSite4 from "../../assets/img/imageSite4.jpg";
import photoSite5 from "../../assets/img/imageSite5.jpg";
import photoSite6 from "../../assets/img/imageSite6.jpg";
import photoSite7 from "../../assets/img/imageSite7.jpg";
import photoSite8 from "../../assets/img/imageSite8.jpg";
import photoSite9 from "../../assets/img/imageSite9.jpg";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const contentState = useSelector((state) => state.content.items);
  const status = useSelector((state) => state.content.status);

  const dispatch = useDispatch();

  const photoArr = [
    photoSite1,
    photoSite2,
    photoSite3,
    photoSite4,
    photoSite5,
    photoSite6,
    photoSite7,
    photoSite8,
    photoSite9,
  ];

  const getContent = async () => {
    try {
      dispatch(fetchContent({ currentPage }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContent();
  }, [currentPage]);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  const contents = contentState.map((obj, i) => {
    return (
      <div key={i} className={styles.content_boxContent}>
        <h3>{obj.name}</h3>
        <a href={obj.siteUrl}>
          <img src={photoArr[obj.id]} alt="Photo site" />
        </a>
        <div className={styles.content_boxText}>
          <h3>Technology:</h3>
          <p>{obj.text}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={styles.content_topText}>
        <h2>My works</h2>
        <p>Hello, these are my works</p>
      </div>

      <div className={styles.content_box}>
        {status === "LOADING" ? skeletons : contents}
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={(number) => setCurrentPage(number)}
      />
    </>
  );
};

export default Home;
