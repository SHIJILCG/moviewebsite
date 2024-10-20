import { useQuery, UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { axiosInstance } from "./axiosinstance";

export const useSearchMovie = (
  movie: string
): UseQueryResult<{
  results: MovieDetailsType[];
}> => {
  return useQuery(
    ["searchmovie"],
    async () => {
      const response = axiosInstance.get(`search/movie?query=${movie}`);
      return (await response).data;
    },
    {
      onSuccess: () => {
        // console.log("succesfuly  fetched Search movie data");
      },
      onError: () => {
        console.log("Error occured");
      },
    }
  );
};
