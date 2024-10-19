import React, { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieShowContainer } from "../Components/MovieShowContainer";
import { OptionCard } from "../Components/OptionCard";
import { SearchMovieShowContainer } from "../Components/SearchMovieShowContainer";
import { UserPropfileButton } from "../Components/UserPropfileButton";
export const currentUserContext = createContext<number | null>(0);
export const UserHomePage = () => {
  const [SearchValue, setSearchValue] = useState<string>("");
  const { userId } = useParams();
  const CurrentUser = !userId || typeof +userId !== "number" ? 0 : +userId;
  return (
    <currentUserContext.Provider value={CurrentUser}>
      <div className="flex flex-col h-[100vh] relative">
        <header className="h-[100px] w-[100%] bg-gray-700 fixed top-0 z-[1000] flex items-center justify-between p-[25px]">
          <UserPropfileButton userid={userId} />
          <input
            type="text"
            value={SearchValue}
            placeholder="Search Movie"
            className="bg-transparent px-[10px] text-white border-2 border-black rounded-lg h-[45px] w-[300px]"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </header>{" "}
        {/** header */}
        <div
          className={`mt-[100px]  max-w-[100vw] ${
            SearchValue ? "min-h-[100vh]" : "flex"
          }`}
        >
          {!SearchValue && (
            <nav className="w-[300px] h-[100%] bg-gray-800 fixed flex flex-col left-0 top-[100px] gap-2 p-[10px] z-[1000] text-white text-[20px] font-bold">
              <OptionCard text="Popular" />
              <OptionCard text="Now Playing" />
              <OptionCard text="Top Rated" />
              <OptionCard text="Upcoming" />
            </nav>
          )}
          {/** left nav */}
          {SearchValue ? (
            <SearchMovieShowContainer searchResult={SearchValue} userId={CurrentUser}/>
          ) : (
            <MovieShowContainer userId={CurrentUser}/>
          )}
        </div>
      </div>
    </currentUserContext.Provider>
  );
};
