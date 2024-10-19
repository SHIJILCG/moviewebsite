import { useEffect } from "react";
import { useSearchMovie } from "../api/useSearchMovie";
import { MovieCard } from "./MovieCard";
import loadingGif from "../grey-9026_256.gif";
export const SearchMovieShowContainer = ({
  searchResult,
  userId,
}: {
  searchResult: string;
  userId: number;
}) => {
  const {
    data: movies,
    isError,
    isLoading,
    refetch,
  } = useSearchMovie(searchResult);

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 1000);
  }, [searchResult]);

  return (
    <div className=" p-[20px] min-h-[100%] min-w-[100%] bg-gray-500 searchResultContainer">
      <div className={` flex flex-col text-left min-h-[432px] `}>
        <div className="flex w-[100%] flex-wrap gap-20 mx-auto">
          {isLoading && (
            <div className=" p-[20px] min-h-[100%] min-w-[100%] bg-gray-500 flex justify-center items-center">
              <img
                src={loadingGif}
                alt="Data is loading"
                className="w-[100px]"
              />
            </div>
          )}
          {isError && (
            <div className=" p-[20px] min-h-[100%] min-w-[100%] bg-gray-500">
              Error while fetching movies
            </div>
          )}
          {movies?.results &&
            movies.results.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                userId={userId}
                type="WhishList"
              />
            ))}
          {!isLoading && !isError && !movies?.results.length && (
            <div className="flex flex-col min-h-[432px] w-[100%] text-center text-[20px]">
              No data found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
