import React from "react";
import { UserDetailsType } from "../Types/userDetailsType";
import { useNavigate } from "react-router-dom";
type UserSelectbuttonPropsTYpe = {
  user: UserDetailsType;
};
export const UserSelectbutton = ({ user }: UserSelectbuttonPropsTYpe) => {
  const navigate = useNavigate();
  return (
    <div
      className=" text-[#ffffff] uppercase font-bold w-[96%] flex gap-5 text-left"
      onClick={() => navigate(`userhomepage/${user.id}`)}
    >
      <span>{user.name}</span>
      <span className=" lowercase text-[#858585]">{user.email}</span>
    </div>
  );
};
