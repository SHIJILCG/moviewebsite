import React from "react";
import { useGetMovies } from "../api/useGetMovies";
import { MovieDetailsType } from "../Types/movietypes";
import { MovieCard } from "../Components/MovieCard";

export const UserHomePage = () => {
  const { data: movies, isLoading, isError } = useGetMovies();
  if (isLoading) {
    return <div>Data is fetching</div>;
  }
  if (isError) {
    return <div>Error while fetching</div>;
  }
  if (!movies || movies.results.length < 1) {
    return <div>No data found</div>;
  }
  return (
    <div className="flex flex-col h-[100vh] relative">
      <header className="h-[100px] w-[100%] bg-gray-700 fixed top-0 z-[1000]"></header>{" "}
      {/** header */}
      <div className="flex">
        <nav className="w-[300px] h-[100%] bg-gray-800 fixed left-0 top-[100px]"></nav>
        {/** left nav */}
        <div className="flex flex-wrap gap-[40px] p-[20px] mt-[100px] ml-[300px] bg-gray-500">
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
