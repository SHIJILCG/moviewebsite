import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { DetailsType } from "../Types/userDetailsType";

export default function useDeletewhislist(userId: number) {
  const queryClient = useQueryClient();
  return useMutation(
    (Details: DetailsType) =>
      axios.delete(`http://localhost:4040/whishlist/${userId}`, { data: Details }),
    {
      onSuccess: () => {
        alert("Movie deleted from wishlist");
        queryClient.invalidateQueries(["whishlist", userId]);
      },
      onError: () => {
        console.error("Error deleting movie:");
      },
    }
  );
}
