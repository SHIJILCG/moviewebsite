import React, { useState } from "react";
import { MovieDetailsType } from "../Types/movietypes";
import RatingCircle from "./RatingCircle";
import { VirewDetailsButton } from "./VirewDetailsButton";
import { WhishlistButton } from "./WhishlistButton";
import WhatchlaterButton from "./WatchlaterButton";

export const MovieCard = ({ movie }: { movie: MovieDetailsType }) => {
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
            <WhishlistButton active={active} movie={movie} />
            <WhatchlaterButton active={active} movie={movie} />
          </div>
        </div>
        <VirewDetailsButton id={movie.id} active={active} />
      </div>
      <div className="flex items-center">
        <span className="text-[20px] text-white font-bold mx-[25px]">
          {movie.title}
        </span>
      </div>
    </div>
  );
};
