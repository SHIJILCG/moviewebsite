import { useState } from "react";
import { useLocation } from "react-router-dom";
import BackButtonGray from "../Components/BackButtonGray";
import { ContainerForWhishAndWatch } from "../Components/ContainerForWhishAndWatch";
import ProfilePageOptions from "../Components/ProfilePageOptions";
import { UserProfileDetailsContainer } from "../Components/UserProfileDetailsContainer";

export const UserProfilePage = () => {
  const { state } = useLocation();
  const { name, email, id } = state;
  const [makeActive, setMakeActive] = useState(1);
  return (
    <div className="flex min-w-[100vw] min-h-[100vh]">
      <div className="w-[25%] h-[100%] bg-gray-800 fixed">
        <BackButtonGray css="absolute" />
        <div className="mt-[100px] px-[10px] w-[100%] h-[100% - 100px] flex flex-col gap-[20px]">
          <ProfilePageOptions
            makeActive={makeActive}
            setMakeActive={setMakeActive}
            value={1}
            text="Profile"
          />
          <ProfilePageOptions
            makeActive={makeActive}
            setMakeActive={setMakeActive}
            value={2}
            text="WhishList"
          />
          <ProfilePageOptions
            makeActive={makeActive}
            setMakeActive={setMakeActive}
            value={3}
            text="WatchLaterr"
          />
        </div>
      </div>
      <div className="w-[76%] ml-[24%] bg-gray-500">
        {makeActive === 1 && (
          <UserProfileDetailsContainer name={name} email={email} />
        )}
        {makeActive === 2 && (
          <ContainerForWhishAndWatch id={id} type="WhishList" />
        )}
        {makeActive === 3 && (
          <ContainerForWhishAndWatch id={id} type="WatchLater" />
        )}
      </div>
    </div> 
  )
}