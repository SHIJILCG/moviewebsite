import { MovieCard } from "./MovieCard";
import { MovieDetailsType } from "../Types/movietypes";
import { UseQueryResult } from "react-query";
type MovieCardContainerPorpsType = {
  list: UseQueryResult<{
    results: MovieDetailsType[];
  }>;
  text: string;
};
export const MovieCardContainer = ({
  list: QueryResult,
  text,
}: MovieCardContainerPorpsType) => {
  const { data: Result, isLoading, isError } = QueryResult;
  if (isLoading) {
    return (
      <div className="lex flex-col text-left min-h-[432px]">
        Data is fetching
      </div>
    );
  }
  if (isError) {
    return (
      <div className="lex flex-col text-left min-h-[432px]">
        Error while fetching {text} movies
      </div>
    );
  }
  if (!Result || Result.results.length < 1) {
    return (
      <div className="lex flex-col text-left min-h-[432px]">No data found</div>
    );
  }
  return (
    <div
      className={` flex flex-col text-left min-h-[432px] ${text
        .split(" ")
        .join("")}`}
    >
      <span className="font-bold text-white text-[25px] p-[20px]">{text}</span>
      <div className="flex w-[100%] overflow-x-scroll hidescrollbar">
        {Result.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
