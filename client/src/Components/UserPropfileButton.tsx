import { useNavigate } from "react-router-dom";
import useFetchUserById from "../api/useFetchUserById";
import { FethCurrentUser } from "../common/FetchCurrentUser";

export const UserPropfileButton = () => {
  const userId = FethCurrentUser();
  const { data: user } = useFetchUserById(userId);
  const navigate = useNavigate();
  if (!user || user.id === 0) {
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
      onClick={() => navigate(`/userprofile`, { state: { ...user } })}
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
