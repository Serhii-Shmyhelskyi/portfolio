import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "../../redux/slices/contentSlice";

import styles from "./content.module.scss";
import { Pagination } from "../Pagination";
import { Skeleton } from "../Skeleton/Skeleton";

const index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const contentState = useSelector((state) => state.content.items);
  const status = useSelector((state) => state.content.status);

  const dispatch = useDispatch();

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
          <img src={obj.photo} alt="Photo site" />
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

export default index;
