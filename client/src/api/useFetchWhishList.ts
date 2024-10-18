import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export const useFetchWhishList = (userId: number) => {
  return useQuery(["whishlist"], async () => {
    const response = axios.get(`http://localhost:4040/whishlist/${userId}`);
    return (await response).data;
  });
};
