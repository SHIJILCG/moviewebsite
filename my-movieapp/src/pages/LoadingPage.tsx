import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export const LoadingPage = () => {
  const navigate = useNavigate();
  const [isLoadingPage, setisLoadingPage] = useState(false);
  setTimeout(() => {
    setisLoadingPage(true);
  }, 2000);
  useEffect(() => {
    if (isLoadingPage) {
      navigate("UserHomepage");
    }
  }, [isLoadingPage]);

  return (
    <div className="w-[100vw] h-[100vh] LoadingPage relative">
      <img
        src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-[100%] h-[100%]"
      />
      <p className="absolute top-[55%] text-white left-[20%]">
        Your go-to destination for honest insights and reviews on the latest
        movies!
      </p>
    </div>
  );
};
