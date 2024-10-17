import React from "react";
import { UserDetailsType } from "../Types/userDetailsType";
import { useNavigate } from "react-router-dom";
type UserSelectbuttonPropsTYpe = {
  user: UserDetailsType;
};
export const UserSelectbutton = ({ user }: UserSelectbuttonPropsTYpe) => {
  const navigate = useNavigate();
  return (
    <span
      className=" text-[#ffffff] uppercase font-bold w-[96%] text-left"
      onClick={() => navigate("userhomepage")}
    >
      {user.name}
    </span>
  );
};
