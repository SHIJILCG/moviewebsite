import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "./axiosinstance";

export default function useGetAMovie(movieId: number) {

  return useQuery(
    ["get_item_by_id"],
    async () => {
      const response = await axiosInstance.get(
        `movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    },
    {
      onSuccess: () => {
        console.log("succesfuly fetched cliked movie data");
      },
      onError: () => {
        console.log("error occured while fetching");
      },
    }
  );
}
