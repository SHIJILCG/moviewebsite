import axios from "axios";
import { useQuery } from "react-query";

export const useFetchWhishList = (userId: number) => {
  return useQuery(["whishlist",userId], async () => {
    const response = axios.get(`http://localhost:4040/whishlist/${userId}`);
    return (await response).data;
  });
};
