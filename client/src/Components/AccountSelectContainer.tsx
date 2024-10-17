import React from "react";
import { UserDetailsType } from "../Types/userDetailsType";
import { UserSelectbutton } from "./UserSelectbutton";
import { ThreeDotbutton } from "./ThreeDotbutton";
import { AddNewUserButton } from "./AddNewUserButton";
type AccountSelectContainerPropsTYpe = {
  isNewUser: boolean;
  Users: UserDetailsType[];
  setisNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AccountSelectContainer = ({
  Users,
  isNewUser,
  setisNewUser: setisNewuser,
}: AccountSelectContainerPropsTYpe) => {
  return (
    <div
      className={` p-[40px] flex flex-col max-w-[650px] border-2 border-white rounded-md z-10 ${
        isNewUser ? "hidden" : ""
      }`}
    >
      <span className="text-[30px] p-[20px]  font-bold text-white">
        Choose an account
      </span>
      <div className="flex flex-col gap-5 max-h-[400px] overflow-scroll hiddenscrollbar">
        {Users.map((user: UserDetailsType) => (
          <div key={user.id} className="flex border-b-2 border-white p-[8px] justify-between hover:bg-[#636363]">
            <UserSelectbutton user={user} />
            <ThreeDotbutton />
          </div>
        ))}
      </div>
      <AddNewUserButton setisNewUser={setisNewuser} />
    </div>
  );
};
