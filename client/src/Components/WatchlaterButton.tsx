import React, { useContext } from "react";
import { MovieDetailsType } from "../Types/movietypes";
import { currentUserContext } from "../pages/UserHomePage";
import useFetchWatchlater from "../api/useFetchWatchlater";
import useAddWatchLater from "../api/useAddWatchLater";

export default function WhatchlaterButton({
  active,
  movie,
}: {
  active: string;
  movie: MovieDetailsType;
}) {
  const userIdContext = useContext(currentUserContext);
  const UserId = !userIdContext ? 0 : userIdContext;
  const { data: watchLaterMovies } = useFetchWatchlater(UserId);
  const { mutate } = useAddWatchLater(UserId);
  const handleWatchLaterClick = () => {
    if (
      watchLaterMovies.movies &&
      watchLaterMovies.movies.some(
        (mov: MovieDetailsType) => mov.id === movie.id
      )
    ) {
      alert("The movie is already added to watchlater");
      return;
    }
    mutate({ id: UserId, movie: movie });
  };
  return (
    <div
      className={`w-[30px] h-[30px] rounded-full ${active} translate-y-[-110px]`}
      onClick={handleWatchLaterClick}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp4ZWyt6aNcZ-ZxXUxR4HNdHTZ-UHs4-UVQ&s"
        alt=""
        className="w-[100%] rounded-full"
      />
    </div>
  );
}
