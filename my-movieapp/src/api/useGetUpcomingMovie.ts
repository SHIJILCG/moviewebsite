import axios from "axios";
import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { axiosInstance } from "./axiosinstance";

export const useGetUpcomingMovie = (): UseQueryResult<{
  results: MovieDetailsType[];
}> => {
  return useQuery(
    ["upcomingmovies"],
    async () => {
      const response = axiosInstance.get(`movie/upcoming`);
      return (await response).data;
    },
    {
      onSuccess: (data) => {
        console.log("succesfuly fetched data");
      },
      onError: () => {
        console.log("Error occured");
      },
    }
  );
};
