import { UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { MovieCard } from "./MovieCard";
import loadingGif from "../grey-9026_256.gif";
type MovieCardContainerPorpsType = {
  list: UseQueryResult<{
    results: MovieDetailsType[];
  }>;
  text: string;
  userId: number;
};
export const MovieCardContainer = ({
  list: QueryResult,
  text,
  userId,
}: MovieCardContainerPorpsType) => {
  const { data: Movies, isLoading, isError } = QueryResult;

  return (
    <div
      className={` flex flex-col text-left min-h-[432px] ${text
        .split(" ")
        .join("")}`}
    >
      <span className="font-bold text-white text-[25px] p-[20px]">{text}</span>
      <div
        className={`flex w-[100%] overflow-x-scroll hidescrollbar ${
          isLoading && "justify-center"
        }`}
      >
        {isLoading && (
          <div className="flex flex-col text-left min-h-[432px] justify-center">
            <img src={loadingGif} alt="Data is loading" className="w-[100px]" />
          </div>
        )}
        {isError && (
          <div className="text-center min-h-[432px]">
            Error while fetching {text} movies
          </div>
        )}
        {Movies?.results &&
          Movies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              userId={userId}
              type="WhishList"
            />
          ))}
        {!isLoading && !isError && !Movies?.results.length && (
          <div className="text-center min-h-[432px] w-[100%] text-[20px]">No data found</div>
        )}
      </div>
    </div>
  );
};
