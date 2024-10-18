import axios from "axios";
import { useQuery } from "react-query";

export default function useFetchWatchlater(userId: number) {
  return useQuery(["watchlater"], async () => {
    const response = await axios.get(
      `http://localhost:4040/watchlater/${userId}`
    );
    return response.data;
  });
}
