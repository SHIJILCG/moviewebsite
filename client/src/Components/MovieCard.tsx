import React, { useState } from "react";
import { ContainerType, MovieDetailsType } from "../Types/movietypes";
import DeleteButton from "./DeleteButton";
import RatingCircle from "./RatingCircle";
import { VirewDetailsButton } from "./VirewDetailsButton";
import { WhishListWatchLaterButton } from "./WhishListWatchLaterButton";

export const MovieCard = ({
  movie,
  userId,
  iswhishlist = true,
  iswatchlist = true,
  isDeleteButton = false,
  type,
}: {
  movie: MovieDetailsType;
  userId: number;
  iswhishlist?: boolean;
  iswatchlist?: boolean;
  isDeleteButton?: boolean;
  type: ContainerType;
}) => {
  const [active, setactive] = useState("");
  return (
    <div className=" mx-auto min-w-[280px] max-w-[245px] min-h-[350px] overflow-hidden flex flex-col gap-3 ">
      <div
        className=" mx-auto relative min-w-[234.66px]  shadow-2xl border-2 border-gray-700 overflow-hidden h-[350px]"
        onMouseEnter={() => setactive("active")}
        onMouseLeave={() => setactive("")}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-[100%] h-[100%]"
        />
        <div className="absolute top-1 right-1 h-[150px]">
          <div className="relative w-[100%] items-center justify-between h-[100%] flex flex-col">
            <RatingCircle value={movie.vote_average} />
            {iswhishlist && (
              <WhishListWatchLaterButton
                active={active}
                movie={movie}
                type="WhishList"
              />
            )}
            {iswatchlist && (
              <WhishListWatchLaterButton
                active={active}
                movie={movie}
                type="WatchLater"
              />
            )}
          </div>
        </div>
        <VirewDetailsButton id={movie.id} active={active} />
        {isDeleteButton && (
          <DeleteButton movieId={movie.id} userId={userId} type={type} />
        )}
      </div>
      <div className="flex items-center">
        <span className="text-[20px] text-white font-bold mx-[25px]">
          {movie.title}
        </span>
      </div>
    </div>
  );
};
