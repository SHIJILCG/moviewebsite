import { UseQueryResult } from "react-query";
import { MovieDetailsType } from "../Types/movietypes";
import { MovieCard } from "./MovieCard";
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
  const { data: Result, isLoading, isError } = QueryResult;
  return (
    <div
      className={` flex flex-col text-left min-h-[432px] ${text
        .split(" ")
        .join("")}`}
    >
      <span className="font-bold text-white text-[25px] p-[20px]">{text}</span>
      <div className="flex w-[100%] overflow-x-scroll hidescrollbar">
        {isLoading && (
          <div className="flex flex-col text-left min-h-[432px]">
            Data is fetching
          </div>
        )}
        {isError && (
          <div className="flex flex-col text-left min-h-[432px]">
            Error while fetching {text} movies
          </div>
        )}
        {Result?.results &&
          Result.results.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              userId={userId}
              type="WhishList"
            />
          ))}
        {!isLoading && !isError && !Result?.results && (
          <div className="flex flex-col text-left min-h-[432px]">
            No data found
          </div>
        )}
      </div>
    </div>
  );
};