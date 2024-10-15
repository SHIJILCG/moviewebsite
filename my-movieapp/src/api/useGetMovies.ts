import axios from "axios";
import React from "react";
import { useQueries, useQuery, UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";

export const useGetMovies = (): UseQueryResult<{
  results: MovieDetailsType[];
}> => {
  return useQuery(
    ["movies"],
    async () => {
      const response = axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDgzYWE4NTcxMDEyZjM1MDg0ZTg1YWQ4Zjk3YjIwYSIsIm5iZiI6MTcyODg5NjM5OC41NTI5OTMsInN1YiI6IjY2Y2ViZDNiN2IwZTI2ZTdhZmJiMWRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lkZd5srhUIpnJ7G0GwuYDUiRrEEWeJfMNxDXdcnztpQ",
          },
        }
      );
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
