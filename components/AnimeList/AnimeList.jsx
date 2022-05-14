import React from "react";
import Pagination from "../Pagination";
import { AnimeItem, ListWrapper, AnimeTitle, EmptyWrapper } from "./components";

const AnimeList = ({ data, onChangePage, currentPage }) => {
  const { pageInfo, media } = data.Page;

  return (
    <>
      {media.length > 0 ? (
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
                    <label>Native</label>
                    <h3>{item.title.native ? item.title.native : "-"}</h3>
                    <label>Romaji</label>
                    <h3>{item.title.romaji ? item.title.romaji : "-"}</h3>
                    <label>English</label>
                    <h3>{item.title.english ? item.title.english : "-"}</h3>
                  </AnimeTitle>
                </AnimeItem>
              );
            })}
          </ListWrapper>
          <Pagination
            pageCount={pageInfo.lastPage}
            handlePageClick={onChangePage}
            currentPage={currentPage}
            hasNextPage={pageInfo.hasNextPage}
          />
        </>
      ) : (
        <EmptyWrapper>
          <h1>Anime List is Empty</h1>
        </EmptyWrapper>
      )}
    </>
  );
};

export default AnimeList;
