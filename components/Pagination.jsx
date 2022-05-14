import React from "react";
import styled from "@emotion/styled";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const StyledPagination = styled.ul`
  display: flex;
  gap: 24px;
  margin-top: 48px;
  justify-content: center;
  list-style-type: none;

  li {
    padding: 10px;
    cursor: pointer;

    button {
      all: unset;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &.previous,
    &.next {
      border: 1px solid black;
      border-radius: 8px;

      &.disabled {
        background-color: #aeaeae;
      }

      &:hover {
        background-color: #eaeaea;
      }
    }
  }
`;

const Pagination = ({ handlePageClick, currentPage, hasNextPage }) => {
  return (
    <StyledPagination>
      <li className={`previous ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <GoChevronLeft />
          Previous
        </button>
      </li>
      <li className={`next ${!hasNextPage ? "disabled" : ""}`}>
        <button
          disabled={!hasNextPage}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next <GoChevronRight />
        </button>
      </li>
    </StyledPagination>
  );
};

export default Pagination;
