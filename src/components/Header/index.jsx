import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../../redux/slices/countSlice";

import Logo from "../../assets/img/logo.jpg";
import Photo from "../../assets/img/serhii.jpg";

import styles from "./header.module.scss";

const Header = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      <div className={styles.header_top}>
        <div className={styles.header_topLogo}>
          <img width={120} src={Logo} alt="Logo" />
        </div>
        <h1>Portfolio SHM</h1>
        <div className={styles.header_list}>
          <ul>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/256/phone.png"
                alt="email"
              />
              +380966265268
            </li>
            <li>
              <img
                src="https://img.icons8.com/external-nawicon-glyph-nawicon/256/external-email-communication-nawicon-glyph-nawicon.png"
                alt="phone"
              />
              shmserhi@gmail.com
            </li>
            <li>
              <img
                src="https://img.icons8.com/?size=512&id=12599&format=png"
                alt="gitHub"
              />
              <a href="https://github.com/Serhii-Shmyhelskyi">github</a>
            </li>
          </ul>
          <img width={120} src={Photo} alt="Serhii's photo" />
        </div>
      </div>
     
      {/* <div>
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
      </div> */}
    </>
  );
};

export default Header;
