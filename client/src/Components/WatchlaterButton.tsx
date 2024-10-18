import React, { useContext } from "react";
import { MovieDetailsType } from "../Types/movietypes";
import { currentUserContext } from "../pages/UserHomePage";
import useAddWishlist from "../api/useAddWishlist";

export default function WhatchlaterButton({
  active,
  movie,
}: {
  active: string;
  movie: MovieDetailsType;
}) {
  return (
    <div
      className={`w-[30px] h-[30px] rounded-full ${active} translate-y-[-110px]`}
     
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp4ZWyt6aNcZ-ZxXUxR4HNdHTZ-UHs4-UVQ&s"
        alt=""
        className="w-[100%] rounded-full"
      />
    </div>
  );
}
