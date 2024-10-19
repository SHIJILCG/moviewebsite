import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { DetailsType } from "../Types/userDetailsType";

export default function useDeletewatchLater(userId: number) {
  const queryClient = useQueryClient();
  return useMutation(
    (WatchLateMovie: DetailsType) =>
      axios.delete(`http://localhost:4040/watchlater/${userId}`, { data: WatchLateMovie }),
    {
      onSuccess: () => {
        alert("Movie deleted from watch later");
        queryClient.invalidateQueries(["watchlater", userId]);
      },
      onError: () => {
        console.log("error while deleting movie from watchlater");
      },
    }
  );
}
