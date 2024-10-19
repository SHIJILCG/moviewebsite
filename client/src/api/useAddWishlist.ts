import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { whishlistTypeTwo } from "../Types/movietypes";

export default function useAddWishlist(userId: number) {
  const queryClient = useQueryClient();
  return useMutation(
    (whishlist: whishlistTypeTwo) =>
      axios.post(`http://localhost:4040/whishlist/${userId}`, whishlist),
    {
      onSuccess: () => {
        alert("Movie added to wishlist.❤️");
        queryClient.invalidateQueries(["whishlist", userId]);
      },
      onError: () => {
        console.log("erroe while posting whihlist movie");
      },
    }
  );
}
