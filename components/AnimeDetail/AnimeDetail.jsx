import React from "react";
import { AnimeItem, DetailWrapper, AnimeMeta, BackButton } from "./components";
import { RiArrowGoBackLine } from "react-icons/ri";

const AnimeDetail = ({ data }) => {
  const { Media } = data;
  console.log(Media);

  return (
    <>
      <BackButton>
        <a href="/">
          <RiArrowGoBackLine width={48} height={48} />
        </a>
      </BackButton>
      <DetailWrapper>
        <AnimeItem>
          <img
            src={
              Media.bannerImage
                ? Media.bannerImage
                : "https://via.placeholder.com/350x120?text=Image%20Not%20Found"
            }
            alt={`anime-${Media.title.native}`}
          />
          <AnimeMeta>
            <h2>Title</h2>
            <label>Native</label>
            <h3>{Media.title.native ? Media.title.native : "-"}</h3>
            <label>Romaji</label>
            <h3>{Media.title.romaji ? Media.title.romaji : "-"}</h3>
            <label>English</label>
            <h3>{Media.title.english ? Media.title.english : "-"}</h3>
            <h2>Description</h2>
            <p>{Media.description ? Media.description : "-"}</p>
            <h2>Genres</h2>
            <p>{Media.genres ? Media.genres.join(", ") : "-"}</p>
            <h2>Trending</h2>
            <p>{Media.trending !== 0 ? `No. ${Media.trending}` : "-"}</p>
            <h2>Total Episodes</h2>
            <p>{Media.episodes}</p>
          </AnimeMeta>
        </AnimeItem>
      </DetailWrapper>
    </>
  );
};

export default AnimeDetail;
