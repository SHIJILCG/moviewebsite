import React, { useState } from "react";
import useFetchUser from "../api/useFetchUser";
import { AccountSelectContainer } from "../Components/AccountSelectContainer";
import { AddNewUserContainer } from "../Components/AddNewUserContainer";

export const UserListPage = () => {
  const { data: Users, refetch } = useFetchUser();
  const [isNewUser, setisNewUser] = useState(false);
  if (!Users || Users.length < 1) {
    return <div>No User Found</div>;
  }
  if (!Users) {
    refetch();
  }

  console.log(Users);
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center gap-[40px] LoginPage ">
      <div className="h-[100%] flex flex-col justify-center text-left w-[40%] max-w-[40%] z-10">
        <span className="text-white uppercase text-[60px] font-bold">
          Welcome back
        </span>
        <span className="text-white">
          Welcome back to your favorite movie hub! Log in to explore reviews,
          ratings, and more
        </span>
      </div>
      <div className="h-[100%] flex flex-col justify-center w-[40%] max-w-[40%]">
        {isNewUser ? (
          <AddNewUserContainer
            isNewUser={isNewUser}
            setisNewUser={setisNewUser}
          />
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
