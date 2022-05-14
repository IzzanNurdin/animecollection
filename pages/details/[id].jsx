import React from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../components/Loader";
import AnimeDetail from "../../components/AnimeDetail";

const GET_ANIME_BY_ID = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
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
      description
      genres
      trending
      episodes
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

  return <GetAnimeByID id={id} />;
};

export default Details;
