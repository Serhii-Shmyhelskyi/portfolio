import React, { useState } from "react";

import { useGetGoodsQuery } from "../../redux/slices/contentSlice";

import { Pagination } from "../../components/Pagination";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { photoArr } from "../../components/data/data";

import styles from "./content.module.scss";
import ErrorComponent from "../../components/ErrorComponent";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: goods = [], isLoading, error } = useGetGoodsQuery(currentPage);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const contents = goods.map((obj, i) => {
    return (
      <div key={i} className={styles.content_boxContent}>
        <a href={obj.siteUrl} target="_blank">
          <h3>{obj.name}</h3>
        </a>
        <a href={obj.siteUrl} target="_blank">
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
      {error ? (
        <ErrorComponent />
      ) : (
        <div className={styles.content_topText}>
          <h2>Hi, my name is Serhii</h2>
          <p className={styles.content_smallText}>I'm front-end developer</p>
          <h2 className={styles.content_bigText}>My projects</h2>
        </div>
      )}

      <div className={styles.content_box}>
        {isLoading ? skeletons : contents}
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={(number) => setCurrentPage(number)}
      />
    </>
  );
};

export default Home;
