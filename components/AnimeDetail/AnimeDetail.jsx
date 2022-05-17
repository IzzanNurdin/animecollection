import React from "react";
import {
  AnimeItem,
  DetailWrapper,
  AnimeMeta,
  BackButton,
  HeaderWrapper,
  AddButton,
} from "./components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import ReactHtmlParser from "react-html-parser";
import { dateParser } from "../../utils/dateParser";
import AddToCollectionModal from "../AddToCollectionModal";

const AnimeDetail = ({ data }) => {
  const { Media } = data;
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <HeaderWrapper>
        <BackButton>
          <a href="/">
            <RiArrowGoBackLine width={48} height={48} />
          </a>
        </BackButton>
        <AddButton onClick={() => setOpenModal(true)}>
          <FiPlusCircle /> Add to Collection
        </AddButton>
        <AddToCollectionModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </HeaderWrapper>
      <DetailWrapper>
        <AnimeItem>
          <h1>
            {`${Media.title.native ? Media.title.native : "-"} / ${
              Media.title.romaji ? Media.title.romaji : "-"
            } / ${Media.title.english ? Media.title.english : "-"}`}
          </h1>
          <img
            src={
              Media.bannerImage
                ? Media.bannerImage
                : "https://via.placeholder.com/350x120?text=Image%20Not%20Found"
            }
            alt={`anime-${Media.title.native}`}
          />
          <AnimeMeta>
            <div className="description">
              <h2>Description</h2>
              <p>
                {Media.description ? ReactHtmlParser(Media.description) : "-"}
              </p>
            </div>
            <div className="section">
              <h2>Genres</h2>
              <p>{Media.genres ? Media.genres.join(", ") : "-"}</p>
            </div>
            <div className="section">
              <h2>Trending</h2>
              <p>{Media.trending !== 0 ? `No. ${Media.trending}` : "-"}</p>
            </div>
            <div className="section">
              <h2>Total Episodes</h2>
              <p>{Media.episodes}</p>
            </div>
            <div className="section">
              <h2>Format</h2>
              <p>{Media.format}</p>
            </div>
            <div className="section">
              <h2>Start Date</h2>
              <p>
                {dateParser(
                  Media.startDate.day,
                  Media.startDate.month,
                  Media.startDate.year
                )}
              </p>
            </div>
            <div className="section">
              <h2>End Date</h2>
              <p>
                {Media.endDate !== {}
                  ? dateParser(
                      Media.endDate.day,
                      Media.endDate.month,
                      Media.endDate.year
                    )
                  : "-"}
              </p>
            </div>
          </AnimeMeta>
        </AnimeItem>
      </DetailWrapper>
    </>
  );
};

export default AnimeDetail;
