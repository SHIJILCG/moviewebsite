import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { axiosInstance } from "./axiosinstance";

export const useGetPopularMovie = (): UseQueryResult<{
  results: MovieDetailsType[];
}> => {
  return useQuery(
    ["popularmovies"],
    async () => {
      const response = axiosInstance.get(`movie/popular`);
      return (await response).data;
    },
    {
      onSuccess: (data) => {
        // console.log("succesfuly fetched popular movie data");
      },
      onError: () => {
        console.log("Error occured");
      },
    }
  );
};
