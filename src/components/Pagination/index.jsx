import React from "react";
import ReactPaginate from "react-paginate";

import { useGetAllGoodsQuery } from "../../redux/slices/contentSlice";
import styles from "./pagination.module.scss";

import { pageUp } from "../function/function";

export const Pagination = ({ currentPage, onChangePage }) => {
  const { data: allGoods = [] } = useGetAllGoodsQuery();

  let pageRange = 6;
  //кількість карток на сторінці
  const pageCount = Math.ceil(allGoods.length / pageRange);
  return (
    <ReactPaginate
      onClick={() => pageUp()}
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
