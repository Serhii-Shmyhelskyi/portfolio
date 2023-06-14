import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/countSlice";

import Logo from "../../assets/img/serhii.jpg";
import Photo from "../../assets/img/serhii.jpg";

import styles from "./header.module.scss";

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.header_top}>
        <div className={styles.header_topLogo}>
          <img width={120} src={Logo} alt="Logo" />
        </div>
        <h1>Portfolio SHM</h1>
        <div className={styles.header_list}>
          <li>
            <ul>+380966265268</ul>
            <ul>shmserhi@gmail.com</ul>
            <ul>
              <a href="https://github.com/Serhii-Shmyhelskyi">github</a>
            </ul>
          </li>
          <img width={120} src={Photo} alt="Serhii's photo" />
        </div>
      </div>
      <div className={styles.header_text}>
        <h2>Serhii Shmyhelskyi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur
          ab voluptatem quis excepturi saepe, velit quia delectus fugit a porro
          architecto ipsam cupiditate vitae tempora corporis, nihil consequatur
          aliquam.
        </p>
      </div>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
