import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetAMovie from "../api/useGetAMovie";
import { MovieDetailsType } from "../Types/movietypes";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate()
  const movie = useGetAMovie((movieId && +movieId) || 1);
  console.log(movie.data);
  return (
  <>
      <div className=" min-h-[100vh] w-[100vw] relative flex mainPage ">
      <div className="w-[100%] max-h-[100vh] h-[100%] absolute z-[-100]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.data?.backdrop_path}`}
          alt=""
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="w-[50%]"></div>
      <div className="w-[50%] mt-[100px] z-10 text-center items-center flex flex-col gap-[20px]">
        <span className="text-[80px] text-white font-bold uppercase">
          {movie.data?.original_title}
        </span>
        <div className="flex w-[55%] justify-between text-white border-y-2 border-[#aaaaaa] py-[8px]">
          <div className="flex gap-[10px]">
            <span>{movie.data?.release_date?.slice(0, 4)}</span>
            <span>{movie.data?.genres[0].name}</span>
            <span>{movie.data?.runtime}m</span>
          </div>
          <div className="flex gap-[10px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
              alt=""
              className="h-[25px]"
            />
            <span>{movie.data?.vote_average}</span>
          </div>
        </div>
        <p className="text-[#eeeeee] text-center w-[60%] mx-auto">
          {movie.data?.overview}
        </p>
      </div>
    </div>
    <div className="p-[20px] pt-[50px] bg-slate-400 flex">
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.data?.poster_path}`} alt="" />
          <span className="text-[20px] font-bold text-[#fff]">{movie.data?.tagline}</span>
        </div>
        <div className="flex-col flex text-[#17394b] text-left">
           <span className="text-[30px] font-bold">{movie.data?.title}({movie.data?.release_date})</span>
           <span className="font-bold uppercase">vote average:{movie.data?.vote_average}</span>
           <span className="font-bold uppercase">popularity:{movie.data?.popularity}</span>
           <span className="font-bold uppercase">vote count:{movie.data?.vote_count}</span>
           <span className="font-bold uppercase">budget:{movie.data?.budget}$</span>
           <span className="font-bold uppercase">revenue:{movie.data?.revenue}$</span>
        </div>
    </div>
    <button className="fixed top-10 left-10 bg-red-800 py-[10px] px-[40px] rounded-2xl rotate-180 text-white z-10 text-[20px] active:scale-95" onClick={()=> navigate(-1)}>➜</button>
  </>
  );
};
