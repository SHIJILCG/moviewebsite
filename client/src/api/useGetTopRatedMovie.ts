
import { useQuery, UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { axiosInstance } from "./axiosinstance";

export const useGetTopRatedMovie = (): UseQueryResult<{
  results: MovieDetailsType[];
}> => {
  return useQuery(
    ["topmovies"],
    async () => {
      const response = axiosInstance.get(`movie/top_rated`);
      return (await response).data;
    },
    {
      onSuccess: (data) => {
        // console.log("succesfuly fetched top movies data");
      },
      onError: () => {
        console.log("Error occured");
      },
    }
  );
};
