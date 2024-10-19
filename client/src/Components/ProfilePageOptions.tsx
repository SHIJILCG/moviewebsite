import React from "react";
type ProfileSelectButtonPropsType = {
  makeActive: number;
  setMakeActive: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  value: number;
};
export default function ProfilePageOptions({
  makeActive,
  setMakeActive,
  text,
  value,
}: ProfileSelectButtonPropsType) {
  return (
    <span
      className={`bg-gray-900 text-white w-[100%] px-[20px] py-[10px] hover:bg-[#696565ec] rounded-md ${
        makeActive === value && "bg-[#696565ec]"
      }`}
      onClick={() => setMakeActive(value)}
    >
      {text}
    </span>
  );
}
