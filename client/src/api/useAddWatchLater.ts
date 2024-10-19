import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";

export default function useAddWatchLater(userId: number) {
  const querClient = useQueryClient();
  return useMutation(
    (watchlaterMovie: { id: number; movie: MovieDetailsType }) =>
      axios.post(`http://localhost:4040/watchlater/${userId}`, watchlaterMovie),
    {
      onSuccess: () => {
        alert("Movie added to watchlater.⏲");
        querClient.invalidateQueries(["watchlater", userId]);
      },
      onError: () => {
        console.log("error while adding movie to watach later");
      },
    }
  );
}
