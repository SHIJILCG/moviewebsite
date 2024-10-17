
import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { axiosInstance } from "./axiosinstance";

export const useGetNowPlayingMovie = (): UseQueryResult<{
  results: MovieDetailsType[];
}> => {
  return useQuery(
    ["nowplayingmovies"],
    async () => {
      const response = axiosInstance.get(`movie/now_playing`);
      return (await response).data;
    },
    {
      onSuccess: (data) => {
        console.log("succesfuly fetched now playing movies data");
      },
      onError: () => {
        console.log("Error occured");
      },
    }
  );
};