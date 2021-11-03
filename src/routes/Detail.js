import { useParams } from "react-router";
import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      summary
    }
  }
`;
export default () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      id: +id,
    },
  });
  return "Detail";
};
