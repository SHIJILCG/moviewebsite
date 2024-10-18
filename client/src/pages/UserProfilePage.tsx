import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserProfileDetailsContainer } from "../Components/UserProfileDetailsContainer";
import { UserWhisListDetailsContainer } from "../Components/UserWhisListDetailsContainer";
import { UserWatchLaterDetailsContainer } from "../Components/UserWatchLaterDetailsContainer";

export const UserProfilePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name, email,id } = state;
  const [makeActive, setMakeActive] = useState(1);
  return (
    <div className="flex min-w-[100vw] min-h-[100vh]">
      <div className="w-[20%] bg-gray-800 relative">
        <button
          className="bg-[#575555] px-[30px] py-[10px] rounded-2xl active:scale-95 text-white absolute left-6 top-10"
          onClick={() => navigate(-1)}
        >
          🡸
        </button>
        <div className="mt-[100px] px-[10px] w-[100%] h-[100% - 100px] flex flex-col gap-[20px]">
          <span
            className={`bg-gray-900 text-white w-[100%] px-[20px] py-[10px] hover:bg-[#00000093] rounded-md ${
              makeActive === 1 && "bg-[#00000093]"
            }`}
            onClick={() => setMakeActive(1)}
          >
            Profile
          </span>
          <span
            className={`bg-gray-900 text-white w-[100%] px-[20px] py-[10px] hover:bg-[#00000093] rounded-md ${
              makeActive === 2 && "bg-[#00000093]"
            }`}
            onClick={() => setMakeActive(2)}
          >
            WhishList
          </span>
          <span
            className={`bg-gray-900 text-white w-[100%] px-[20px] py-[10px] hover:bg-[#00000093] rounded-md ${
              makeActive === 3 && "bg-[#00000093]"
            }`}
            onClick={() => setMakeActive(3)}
          >
            watchLater
          </span>
        </div>
      </div>
      <div className="flex-1 bg-gray-500">
        {makeActive === 1 && <UserProfileDetailsContainer name={name} email={email} />}
        {makeActive === 2 && <UserWhisListDetailsContainer id={id} />}
        {makeActive === 3 && <UserWatchLaterDetailsContainer id={id} />}
      </div>
    </div>
  );
};
