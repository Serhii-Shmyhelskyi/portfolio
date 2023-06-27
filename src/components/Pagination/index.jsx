import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

import styles from "./pagination.module.scss";

export const Pagination = ({ currentPage, onChangePage }) => {
  const { pagination } = useSelector((state) => state.content);

  let pageRange = 6;
  //кількість карток на сторінці
  const pageCount = Math.ceil(pagination / pageRange);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={pageRange}
      pageCount={pageCount}
      forcePage={currentPage - 1}
    />
  );
};
