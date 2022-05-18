import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import AnimeList from "../components/AnimeList";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import { getSessionStorage, setSessionStorage } from "../utils/webStorage";

const GET_ANIME = gql`
  query ($search: String, $page: Int) {
    Page(page: $page, perPage: 10) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME) {
        id
        idMal
        startDate {
          year
          month
          day
        }
        season
        seasonYear
        bannerImage
        title {
          native
          romaji
          english
        }
      }
    }
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  padding: 48px 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 768px) {
    padding: 12px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  padding: 12px 64px;
  display: flex;
  gap: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    width: 200px;
    cursor: pointer;
    justify-content: center;
    padding: 12px;
    border: 1px solid white;
    border-radius: 8px;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 12px;

    a {
      width: 100%;
    }
  }
`;

function GetAnime({ querySearch, currentPage, onChangePage }) {
  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { search: querySearch, page: currentPage },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error : {error}</p>;

  // return console.log(data);

  return (
    <AnimeList
      data={data}
      onChangePage={onChangePage}
      currentPage={currentPage}
    />
  );
}

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [querySearch, setQuerySearch] = React.useState(null);

  React.useEffect(() => {
    setQuerySearch(
      getSessionStorage("search") === "" ? null : getSessionStorage("search")
    );
    setCurrentPage(
      getSessionStorage("last_page") ? getSessionStorage("last_page") : 1
    );
  }, []);

  const setQuery = React.useCallback((value) => {
    setQuerySearch(value === "" ? null : value);
    setCurrentPage(1);
    setSessionStorage("last_page", 1);
    setSessionStorage("search", value);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="Anime List from AniList" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderWrapper>
        <SearchBar
          value={querySearch}
          onChange={setQuery}
          placeholder="Find your anime here"
        />
        <a href="/collection">My Collection</a>
      </HeaderWrapper>
      <ListWrapper>
        <GetAnime
          querySearch={querySearch}
          currentPage={currentPage}
          onChangePage={(page) => {
            setCurrentPage(page);
            setSessionStorage("last_page", page);
            window.scrollTo(0, 0);
          }}
        />
      </ListWrapper>
    </div>
  );
}
