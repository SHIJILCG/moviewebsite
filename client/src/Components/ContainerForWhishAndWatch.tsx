import { ContainerType, MovieDetailsType } from "../Types/movietypes";
import { MovieCard } from "./MovieCard";
import { FetchWatchlater } from "../common/FetchWhislistandWatchlist";
import { FetchWhishList } from "../common/FetchWhislistandWatchlist";
export const ContainerForWhishAndWatch = ({
  id,
  type,
}: {
  id: number;
  type: ContainerType;
}) => {
  
  const { data: Movies } =
    type === "WatchLater" ? FetchWatchlater(id) : FetchWhishList(id);
  if (!Movies?.movies || !Movies.movies?.length) {
    return (
      <div className="w-[100%] h-[100%] flex items-center justify-center text-[30px] font-bold">
        <span>
          {type === "WatchLater"
            ? "No movies in Watch Later yet"
            : "No movies in WishList yet."}
        </span>
      </div>
    );
  }
  return (
    <div className="w-[100%] h-[100%] flex flex-wrap p-[20px]">
      {Movies.movies?.map((movie: MovieDetailsType) => (
        <MovieCard
          key={movie.id}
          userId={id}
          movie={movie}
          iswatchlist={false}
          iswhishlist={false}
          isDeleteButton={true}
          type={type}
        />
      ))}
    </div>
  );
};
