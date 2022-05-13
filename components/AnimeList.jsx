import React from "react";
import styled from "@emotion/styled";
import Pagination from "./Pagination";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 48px 64px;
`;

const AnimeItem = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid black;
  display: flex;
  gap: 24px;
  padding: 24px;
  align-items: center;
  flex-direction: row;
  border-radius: 16px;
  height: fit-content;
  width: 100%;
  transition: box-shadow 300ms ease, transform 300ms ease,
    -webkit-transform 300ms ease;

  &:hover {
    box-shadow: 0px 48px 44px 0px #566e9b10;
    transform: translate(0px, -8px);
  }

  img {
    width: 350px;
    height: 130px;
    border-radius: 8px;
  }

  h3 {
    margin: 12px 0px;
  }
`;

const AnimeTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnimeList = ({ data, onChangePage }) => {
  const { pageInfo, media } = data.Page;

  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <>
      <ListWrapper>
        {media.map((item) => {
          return (
            <AnimeItem key={item.id}>
              <img
                src={
                  item.bannerImage
                    ? item.bannerImage
                    : "https://via.placeholder.com/350x120?text=Image%20Not%20Found"
                }
                alt={`anime-${item.title.native}`}
              />
              <AnimeTitle>
                <h3>{item.title.native}</h3>
                <h3>{item.title.romaji}</h3>
                <h3>{item.title.english}</h3>
              </AnimeTitle>
            </AnimeItem>
          );
        })}
      </ListWrapper>
      <Pagination
        pageCount={pageInfo.lastPage}
        handlePageClick={onChangePage}
      />
    </>
  );
};

export default AnimeList;
