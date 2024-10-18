import React from "react";
import useFetchWatchlater from "../api/useFetchWatchlater";

export const UserWatchLaterDetailsContainer = ({id}:{id:number}) => {
  const {data:watchLater}= useFetchWatchlater(id)
  if(!watchLater?.movies){
      return <div className="w-[100%] h-[100%] flex items-center justify-center text-[30px] font-bold">No movies added yet</div>;
  }
  return <div className="w-[100%] h-[100%]">watchLater</div>;
};
