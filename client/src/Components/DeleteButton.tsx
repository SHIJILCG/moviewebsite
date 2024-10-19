import { useState } from "react";
import useDeletewhislist from "../api/useDeletewhislist";
import { ContainerType } from "../Types/movietypes";
import useDeletewatchLater from "../api/useDeletewatchLater";

export default function DeleteButton({
  movieId,
  userId,
  type,
}: {
  movieId: number;
  userId: number;
  type: ContainerType;
}) {
  const { mutate } = useDeletewhislist(userId);
  const { mutate: mutateTwo } = useDeletewatchLater(userId);
  const [active, setactive] = useState(false);
  const handlebuttonclik = () => {
    type === "WhishList"
      ? mutate({ userId: userId, movieId: movieId })
      : mutateTwo({ userId: userId, movieId: movieId });
  };
  return (
    <div className=" absolute top-5 left-5 text-[18px] text-white ">
      <div
        className="realative flex-col "
        onMouseEnter={() => setactive(true)}
        onMouseLeave={() => setactive(false)}
      >
        <button className="active:scale-95" onClick={handlebuttonclik}>
        ✖️
        </button>
        <span
          className={`absolute bg-black  rounded-md px-[5px] ml-[2px] ${
            active ? "" : "hidden"
          }`}
        >
          Delete
        </span>
      </div>
    </div>
  );
}
