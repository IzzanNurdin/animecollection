import React from "react";
import {
  AnimeItem,
  DetailWrapper,
  AnimeMeta,
  HeaderWrapper,
} from "./components";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import ReactHtmlParser from "react-html-parser";
import { ToastContainer, toast } from "react-toastify";
import { dateParser } from "../../utils/dateParser";
import AddToCollectionModal from "../AddToCollectionModal";
import { normalizeText, readableText } from "../../utils/readableFormat";
import { listedCollection } from "../../utils/objectChecker";
import { UseCollectionContext } from "../../context/CollectionContext";
import { AddDetailCollectionButton, BackButton } from "components/Buttons";

const AnimeDetail = ({ data }) => {
  const { Media } = data;
  const [openModal, setOpenModal] = React.useState(false);
  const [collectionListed, setCollectionListed] = React.useState([]);

  const { collectionList } = UseCollectionContext();

  React.useEffect(() => {
    if (collectionList) {
      setCollectionListed(listedCollection(Media.id));
    }
  }, [collectionList, openModal]);

  const showToast = ({ collectionName }) => {
    toast.success(`Anime added to ${collectionName}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <HeaderWrapper>
        <BackButton>
          <Link href="/">
            <RiArrowGoBackLine width={48} height={48} />
          </Link>
        </BackButton>
        <AddDetailCollectionButton onClick={() => setOpenModal(true)}>
          <FiPlusCircle /> Add to Collection
        </AddDetailCollectionButton>
        <AddToCollectionModal
          isOpen={openModal}
          onClose={(collectionName) => {
            setOpenModal(false);
            collectionName && showToast({ collectionName });
          }}
          data={Media}
        />
      </HeaderWrapper>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
              <p>{Media.episodes ? Media.episodes : "-"}</p>
            </div>
            <div className="section">
              <h2>Episode Duration</h2>
              <p>{Media.duration ? `${Media.duration} Mins` : "-"}</p>
            </div>
            <div className="section">
              <h2>Format</h2>
              <p>{Media.format ? readableText(Media.format) : "-"}</p>
            </div>
            <div className="section">
              <h2>Status</h2>
              <p>{Media.status ? readableText(Media.status) : "-"}</p>
            </div>
            <div className="section">
              <h2>Season</h2>
              <p>
                {Media.season && Media.seasonYear
                  ? `${normalizeText(Media.season)} ${Media.seasonYear}`
                  : "-"}
              </p>
            </div>
            <div className="section">
              <h2>Start Date</h2>
              <p>
                {Media.startDate.day &&
                Media.startDate.month &&
                Media.startDate.year
                  ? dateParser(
                      Media.startDate.day,
                      Media.startDate.month,
                      Media.startDate.year
                    )
                  : "-"}
              </p>
            </div>
            <div className="section">
              <h2>End Date</h2>
              <p>
                {Media.endDate.day && Media.endDate.month && Media.endDate.year
                  ? dateParser(
                      Media.endDate.day,
                      Media.endDate.month,
                      Media.endDate.year
                    )
                  : "-"}
              </p>
            </div>
            <div className="section">
              <h2>My Collection</h2>
              <p>
                {collectionListed.length > 0
                  ? collectionListed.map((item, idx) => {
                      return (
                        <Link
                          key={`${idx}-${item}`}
                          href={`/collection/${item}`}
                        >
                          {idx === collectionListed.length - 1
                            ? `${item}`
                            : `${item}, `}
                        </Link>
                      );
                    })
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
