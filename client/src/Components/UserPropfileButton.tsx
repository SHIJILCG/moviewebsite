import { useNavigate } from "react-router-dom";
import useFetchUserById from "../api/useFetchUserById";

export const UserPropfileButton = ({
  userid,
}: {
  userid: string | undefined;
}) => {
  const { data: user } = useFetchUserById(
    !userid || typeof +userid !== "number" ? 0 : +userid
  );
  const navigate = useNavigate();
  if (!user || user.id === 0) {
    ////no need to click action
    return (
      <div className="flex  flex-col items-center text-white">
        <div className=" w-[50px] h-[50px] rounded-full border-2">
          <img
            src="https://img.icons8.com/m_rounded/512w/user-not-found.png"
            alt=""
            className="w-[100%] h-[100%] rounded-full"
          />
        </div>
        <span>No Name Found</span>
      </div>
    );
  }
  return (
    <div
      className="flex flex-col items-center text-white font-bold"
      onClick={() => navigate(`/userprofile`,{state:{...user}})}
    >
      <div className=" w-[50px] h-[50px] rounded-full active:scale-95">
        <img
          src="https://www.svgrepo.com/show/13656/user.svg"
          alt=""
          className="w-[100%] h-[100%] rounded-full"
        />
      </div>
      <span>{user?.name}</span>
    </div>
  );
};
