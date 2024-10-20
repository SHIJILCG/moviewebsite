import useFetchWatchlater from "../api/useFetchWatchlater";
import { useFetchWhishList } from "../api/useFetchWhishList";

export const FetchWhishList = (id: number) => {
  return useFetchWhishList(id);
};
export const FetchWatchlater = (id: number) => {
  return useFetchWatchlater(id);
};
