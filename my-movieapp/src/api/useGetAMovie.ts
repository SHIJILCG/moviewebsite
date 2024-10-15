import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { couldStartTrivia } from "typescript";

export default function useGetAMovie(movieId: number) {
  return useQuery(
    ["get_item_by_id"],
    async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cd83aa8571012f35084e85ad8f97b20a`
      );
      return response.data;
    },
    {
      onSuccess: () => {
        console.log("succesfuly fetched data");
      },
      onError: () => {
        console.log("error occured while fetching");
      },
    }
  );
}
