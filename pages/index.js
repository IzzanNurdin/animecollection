import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import AnimeList from "../components/AnimeList";

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

function GetAnime({ currentPage, onChangePage }) {
  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { search: "Shingeki", page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  // return console.log(data);

  return <AnimeList data={data} onChangePage={onChangePage} />;
}

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="Anime List from AniList" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetAnime currentPage={currentPage} onChangePage={setCurrentPage} />
    </div>
  );
}
