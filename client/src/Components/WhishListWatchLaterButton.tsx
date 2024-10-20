import { MovieDetailsType } from "../Types/movietypes";
import useAddWishlist from "../api/useAddWishlist";
import useAddWatchLater from "../api/useAddWatchLater";
import { FetchWatchlater } from "../common/FetchWhislistandWatchlist";
import { FetchWhishList } from "../common/FetchWhislistandWatchlist";
import { FethCurrentUser } from "../common/FetchCurrentUser";
export const WhishListWatchLaterButton = ({
  active,
  movie,
  type,
}: {
  active: string;
  type: "WhishList" | "WatchLater";
  movie: MovieDetailsType;
}) => {
  const userId = FethCurrentUser();
  const { data: Movies } =
    type === "WatchLater" ? FetchWatchlater(userId) : FetchWhishList(userId);
  const { mutate } = useAddWishlist(userId);
  const { mutate: mutateTwo } = useAddWatchLater(userId);

  const handleButtonClick = () => {
    if (
      Movies.movies &&
      Movies.movies.some((items: MovieDetailsType) => items.id === movie.id)
    ) {
      alert(`The movie is already added to ${type}`);
      return;
    }
    type === "WatchLater"
      ? mutateTwo({ id: userId, movie: movie })
      : mutate({ id: userId, movie: movie });
  };

  return (
    <div
      className={`w-[30px] h-[30px] flex whishlist ${active} ${
        type === "WhishList" ? "translate-y-[-60px]" : "translate-y-[-110px]"
      }`}
      onClick={handleButtonClick}
    >
      <img
        src={`${
          type === "WatchLater"
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp4ZWyt6aNcZ-ZxXUxR4HNdHTZ-UHs4-UVQ&s"
            : "https://cdn-icons-png.flaticon.com/512/8830/8830807.png"
        }`}
        alt=""
        className="w-[100%] rounded-full"
      />
    </div>
  );
};
