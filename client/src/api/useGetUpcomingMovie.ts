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
      onSuccess: () => {
        // console.log("succesfuly fetched upcoming movies data");
      },
      onError: () => {
        console.log("Error occured");
      },
    }
  );
};
