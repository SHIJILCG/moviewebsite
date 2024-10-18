import { move } from "formik";
import { useFetchWhishList } from "../api/useFetchWhishList";
import { MovieDetailsType } from "../Types/movietypes";
import { MovieCard } from "./MovieCard";

export const UserWhisListDetailsContainer = ({ id }: { id: number }) => {
  const { data: WhishList } = useFetchWhishList(id);
  if (!WhishList?.movies) {
    return (
      <div className="w-[100%] h-[100%] flex items-center justify-center text-[30px] font-bold">
        <span>No wishlist added yet.</span>
      </div>
    );
  }
  return (
    <div className="w-[100%] h-[100%] flex flex-wrap p-[20px]">
      {WhishList.movies?.map((movie: MovieDetailsType) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
