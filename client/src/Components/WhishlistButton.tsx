import React, { useContext } from "react";
import { MovieDetailsType } from "../Types/movietypes";
import { currentUserContext } from "../pages/UserHomePage";
import useAddWishlist from "../api/useAddWishlist";
import { useFetchWhishList } from "../api/useFetchWhishList";

export const WhishlistButton = ({
  active,
  movie,
}: {
  active: string;
  movie: MovieDetailsType;
}) => {
  const usercontext = useContext(currentUserContext);
  const userId = !usercontext ? 0 : usercontext;
  console.log(userId)
  const { data: whishlist } = useFetchWhishList(userId);
  const { mutate } = useAddWishlist();
  const whishlistclick = () => {
    if (
     whishlist.movies &&  whishlist.movies.some((items: MovieDetailsType) => items.id === movie.id)
    ) {
      alert("The movie is already added to wishlist");
      return;
    }
    mutate({ id: userId, movies: movie });
  };
  return (
    <div
      className={`w-[30px] h-[30px] flex whishlist ${active} translate-y-[-60px]`}
      onClick={whishlistclick}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/8830/8830807.png"
        alt=""
      />
    </div>
  );
};
