import React from "react";
import ReactPaginate from "react-paginate";
import styled from "@emotion/styled";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const StyledPagination = styled(ReactPaginate)`
  display: flex;
  gap: 24px;
  justify-content: center;
  list-style-type: none;

  li {
    padding: 10px;
    cursor: pointer;

    &.disabled {
      background-color: #aeaeae;
    }

    &.previous,
    &.next {
      border: 1p xsolid black;
      border-radius: 8px;
    }

    &.selected {
      border: 1p xsolid black;
      border-radius: 8px;
      background-color: #88b0d7;
      color: white;
    }
  }
`;

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <StyledPagination
      breakLabel="..."
      nextLabel={<GoChevronRight />}
      onPageChange={(e) => handlePageClick(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<GoChevronLeft />}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
