import React, { useState } from "react";
import useFetchUsers from "../api/useFetchUsers";
import { AccountSelectContainer } from "../Components/AccountSelectContainer";
import { AddNewUserFormDIv } from "../Components/AddNewUserFormDIv";

export const UserListPage = () => {
  const { data: Users } = useFetchUsers();
  const [isNewUser, setisNewUser] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center gap-[40px] overflow-hidden LoginPage ">
      <div className="h-[100%] flex flex-col justify-center text-left w-[40%] max-w-[40%] z-10 LoginPagePartOne">
        <span className="text-white uppercase text-[60px] font-bold LoaginPageLargeText">
          Welcome back
        </span>
        <span className="text-white">
          Welcome back to your favorite movie hub! Log in to explore reviews,
          ratings, and more
        </span>
      </div>
      <div className="h-[100%] flex flex-col justify-center w-[40%] max-w-[40%] LoginPagePartTwo">
        {isNewUser ? (
          <AddNewUserFormDIv setisNewUser={setisNewUser} />
        ) : (
          <AccountSelectContainer
            isNewUser={isNewUser}
            setisNewUser={setisNewUser}
            Users={Users}
          />
        )}
      </div>
    </div>
  );
};
