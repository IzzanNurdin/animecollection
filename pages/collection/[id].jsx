import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { UseCollectionContext } from "context/CollectionContext";
import {
  ListWrapper,
  AnimeItem,
  AnimeTitle,
  EmptyWrapper,
  AnimeMeta,
  AnimeAction,
} from "components/AnimeList/components";
import { HeaderWrapper } from "components/Collection/components";
import { BackButton } from "components/Buttons";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { ListWrapper as ContentWrapper } from "pages";
import ConfirmationModal from "components/ConfirmationModal";
import { removeAnimeCollection } from "utils/objectChecker";

const CollcetionDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { collectionList, setCollectionList } = UseCollectionContext();
  const [openConfirmation, setOpenConfirmation] = React.useState(false);
  const [selectedAnime, setSelectedAnime] = React.useState("");

  return (
    <div>
      <Head>
        <title>Anime Collection - List</title>
        <meta
          name="description"
          content="Anime Collection List from user selection"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfirmationModal
        isOpen={openConfirmation}
        onClose={() => {
          setOpenConfirmation(false);
          setSelectedAnime("");
        }}
        onConfirm={() =>
          removeAnimeCollection(
            selectedAnime,
            collectionList,
            setCollectionList
          )
        }
        question={`Are you sure you want to remove this anime from ${id}?`}
      />
      <HeaderWrapper>
        <BackButton>
          <Link href="/collection">
            <RiArrowGoBackLine width={48} height={48} />
          </Link>
        </BackButton>
        <h1>{id}</h1>
      </HeaderWrapper>
      <ContentWrapper>
        <ListWrapper>
          {collectionList &&
          collectionList[id] &&
          collectionList[id].length > 0 ? (
            collectionList[id].map((item) => {
              return (
                <AnimeItem key={item.id} href={`/details/${item.id}`}>
                  <AnimeMeta>
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
                  </AnimeMeta>
                  <AnimeAction>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setOpenConfirmation(true);
                        setSelectedAnime(item.id);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </AnimeAction>
                </AnimeItem>
              );
            })
          ) : (
            <EmptyWrapper>
              <h1>Anime List is Empty</h1>
            </EmptyWrapper>
          )}
        </ListWrapper>
      </ContentWrapper>
    </div>
  );
};

export default CollcetionDetail;
