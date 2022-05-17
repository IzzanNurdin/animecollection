import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../components/Loader";
import AnimeDetail from "../../components/AnimeDetail";

const GET_ANIME_BY_ID = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      status
      duration
      bannerImage
      description
      genres
      trending
      episodes
      format
      title {
        native
        romaji
        english
      }
    }
  }
`;

function GetAnimeByID({ id }) {
  const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
    variables: { id: id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error : {error}</p>;

  // return console.log(data);

  return <AnimeDetail data={data} />;
}

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Anime Detail</title>
        <meta name="description" content="Anime Detail from AniList" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetAnimeByID id={id} />
    </div>
  );
};

export default Details;
