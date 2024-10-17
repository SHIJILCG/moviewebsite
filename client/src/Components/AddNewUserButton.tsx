import React from "react";
type AddNewUserButtonPropsType = {
  setisNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AddNewUserButton = ({
  setisNewUser,
}: AddNewUserButtonPropsType) => {
  return (
    <button
      className="text-white mt-[20px] active:scale-95"
      onClick={() => setisNewUser(true)}
    >
      Add new user..{" "}
    </button>
  );
};
