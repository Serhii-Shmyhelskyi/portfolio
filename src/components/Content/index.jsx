import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "../../redux/slices/contentSlice";

import styles from "./content.module.scss";

const index = () => {
  const contentState = useSelector((state) => state.content.itemContents);

  const dispatch = useDispatch();

  const getContent = async () => {
    try {
      dispatch(fetchContent());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

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
        {contentState.map((obj, i) => {
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
        })}
      </div>
    </>
  );
};

export default index;
