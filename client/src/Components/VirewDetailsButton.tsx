import React from "react";
import { useNavigate } from "react-router-dom";

export const VirewDetailsButton = ({
  id,
  active,
}: {
  id: number;
  active: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={`absolute bg-red-700 bottom-10 right-5 p-[10px] rounded-3xl text-white font-bold active:scale-95 translate-y-[200%] noactive ${active}`}
      onClick={() => navigate(`/moviedetailspage/${id}`)}
    >
      View Details
    </button>
  );
};
