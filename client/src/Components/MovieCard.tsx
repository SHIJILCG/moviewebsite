import React, { useState } from "react";
import { MovieDetailsType } from "../Types/movietypes";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie }: { movie: MovieDetailsType }) => {
  const navigate = useNavigate();
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
        <span className=" absolute flex items-center justify-center font-bold top-0 right-0 w-[50px] h-[50px] bg-[#9e9e9e] rounded-full">{movie.vote_average.toFixed(1)}</span>
        <button
          className={`absolute bg-red-700 bottom-10 right-5 p-[10px] rounded-3xl text-white font-bold active:scale-95 translate-y-[200%] noactive ${active}`}
          onClick={() => navigate(`/moviedetailspage/${movie.id}`)}
        >
          View Details
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-[20px] text-white font-bold mx-[25px]">
          {movie.title}
        </span>
      </div>
    </div>
  );
};
