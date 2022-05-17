import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { UseCollectionContext } from "context/CollectionContext";
import {
  ListWrapper,
  AnimeItem,
  AnimeTitle,
  EmptyWrapper,
} from "components/AnimeList/components";
import { HeaderWrapper } from "components/collection/components";
import { BackButton } from "components/Buttons";
import { RiArrowGoBackLine } from "react-icons/ri";
import { ListWrapper as ContentWrapper } from "pages";

const CollcetionDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { collectionList } = UseCollectionContext();

  return (
    <div>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="Anime List from AniList" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderWrapper>
        <BackButton>
          <a href="/collection">
            <RiArrowGoBackLine width={48} height={48} />
          </a>
        </BackButton>
      </HeaderWrapper>
      <ContentWrapper>
        <ListWrapper>
          {collectionList &&
          collectionList[id] &&
          collectionList[id].length > 0 ? (
            collectionList[id].map((item) => {
              return (
                <AnimeItem key={item.id} href={`/details/${item.id}`}>
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
