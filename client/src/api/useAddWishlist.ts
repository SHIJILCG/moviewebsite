import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { whishlistType } from "../Types/movietypes";

export default function useAddWishlist() {
  const queryClient = useQueryClient();
  return useMutation(
    (whishlist: whishlistType) => axios.post("http://localhost:4040/create-whishlist", whishlist),
    {
      onSuccess: () => {
        console.log("succesfuly posted whishlist movie");
        queryClient.invalidateQueries(["whishlist"]);
      },
      onError: () => {
        console.log("erroe while posting whihlist movie");
      },
    }
  );
}
