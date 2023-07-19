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
        <a href={obj.siteUrl}>
          <h3>{obj.name}</h3>
        </a>
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
      {error ? (
        <ErrorComponent />
      ) : (
        <div className={styles.content_topText}>
          <h2>My works</h2>
          <p>Hello, these are my works</p>
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
