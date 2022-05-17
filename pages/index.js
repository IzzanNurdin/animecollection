import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import AnimeList from "../components/AnimeList";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage,
} from "../utils/webStorage";

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

const ListWrapper = styled.div`
  width: 100%;
  padding: 48px 64px;
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
    setSessionStorage("search", value);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="Anime List from AniList" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar
        value={querySearch}
        onChange={setQuery}
        placeholder="Find your anime here"
      />
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
