import { useSearchMovie } from "../api/useSearchMovie";
import { MovieCard } from "./MovieCard";

export const SerachMovieShowContainer = ({
  searchResult,
}: {
  searchResult: string;
}) => {
  const { data: movies, isError, isLoading } = useSearchMovie(searchResult);
  if (isLoading) {
    return (
      <div className=" p-[20px] min-h-[100%] min-w-[100%] bg-gray-500">
        Data is fetching
      </div>
    );
  }
  if (isError) {
    return (
      <div className=" p-[20px] min-h-[100%] min-w-[100%] bg-gray-500">
        Error while fetching movies
      </div>
    );
  }
  if (!movies || movies.results.length < 1) {
    return (
      <div className=" p-[20px] min-h-[100%] min-w-[100%] bg-gray-500">
        No data found
      </div>
    );
  }
  return (
    <div className=" p-[20px] min-h-[100%] min-w-[100%] bg-gray-500">
      <div className={` flex flex-col text-left min-h-[432px] `}>
        <div className="flex w-[100%] flex-wrap gap-20 mx-auto">
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
