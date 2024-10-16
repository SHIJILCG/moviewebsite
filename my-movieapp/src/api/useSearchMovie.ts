import axios from "axios";
import React from "react";
import { useQuery, useQueryClient, UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { axiosInstance } from "./axiosinstance";

export const useSearchMovie = (
  movie: string
): UseQueryResult<{
  results: MovieDetailsType[];
}> => {
  console.log("fetching data");
  const queryClient = useQueryClient();
  return useQuery(
    ["searchmovie"],
    async () => {
      const response = axiosInstance.get(`search/movie?query=${movie}`);
      return (await response).data;
    },
    {
      onSuccess: () => {
        console.log("succesfuly fetched data");
        // queryClient.invalidateQueries(['searchmovie'])
      },
      onError: () => {
        console.log("Error occured");
      },
    }
  );
};
