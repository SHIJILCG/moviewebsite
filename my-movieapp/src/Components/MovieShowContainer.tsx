import React from "react";
import { MovieCardContainer } from "./MovieCardContainer";
import { useGetTopRatedMovie } from "../api/useGetTopRatedMovie";
import { useGetUpcomingMovie } from "../api/useGetUpcomingMovie";
import { useGetNowPlayingMovie } from "../api/useGetNowPlayingMovie";
import { useGetPopularMovie } from "../api/useGetPopularMovie";

export const MovieShowContainer = () => {
  const Popularmovies = useGetPopularMovie();
  const NowPlayingmovies = useGetNowPlayingMovie();
  const Topmovies = useGetTopRatedMovie();
  const Upcomingmovies = useGetUpcomingMovie();
  return (
    <div className="flex flex-col p-[20px] min-h-[100vh] ml-[300px] bg-gray-500 mainbody overflow-x-hidden ">
      <MovieCardContainer text="Popular" list={Popularmovies} />
      <MovieCardContainer text="Now Playing" list={NowPlayingmovies} />
      <MovieCardContainer text="Top Rated" list={Topmovies} />
      <MovieCardContainer text="Upcoming" list={Upcomingmovies} />
    </div>
  );
};
