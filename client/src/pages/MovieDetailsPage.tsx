
import { useParams } from "react-router-dom";
import useGetAMovie from "../api/useGetAMovie";
import BackButtonGray from "../Components/BackButtonGray";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const movie = useGetAMovie((movieId && +movieId) || 1);
  return (
    <>
      <div className=" min-h-[100vh] w-[100vw] relative flex mainPage ">
        <div className="w-[100%] max-h-[100vh] h-[100%] absolute z-[-100]">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.data?.backdrop_path}`}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[50%]"></div>
        <div className="w-[50%] mt-[100px] z-10 text-center items-center flex flex-col gap-[20px]">
          <span className="text-[80px] text-white font-bold uppercase">
            {movie.data?.original_title}
          </span>
          <div className="flex w-[55%] justify-between text-white border-y-2 border-[#aaaaaa] py-[8px]">
            <div className="flex gap-[10px]">
              <span>{movie.data?.release_date?.slice(0, 4)}</span>
              <span>{movie.data?.genres[0].name}</span>
              <span>{movie.data?.runtime}m</span>
            </div>
            <div className="flex  gap-[10px]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
                alt=""
                className="h-[25px]"
              />
              <span>{movie.data?.vote_average}</span>
            </div>
          </div>
          <p className="text-[#eeeeee] text-center w-[60%] mx-auto">
            {movie.data?.overview}
          </p>
        </div>
      </div>
      <div className="p-[20px] pt-[50px] bg-slate-400 flex">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.data?.poster_path}`}
            alt=""
          />
          <span className="text-[20px] font-bold text-[#fff]">
            {movie.data?.tagline}
          </span>
        </div>
        <div className="flex-col flex text-[#17394b] text-left flex-1 items-center">
          <span className="text-[30px] font-bold text-white">
            {movie.data?.title}({movie.data?.release_date})
          </span>
          <div className="flex w-[600px] justify-between">
            <span className="font-bold uppercase w-[200px] h-[200px]  flex flex-col  items-center justify-center">
              <span className="w-[100px] h-[100px] rounded-full bg-gray-800 flex items-center justify-center text-white border-4 border-green-400">
                {movie.data?.vote_average}
              </span>
              <span>vote average</span>
            </span>
            <span className="font-bold uppercase w-[200px] h-[200px] flex flex-col  items-center justify-center">
              <span className="w-[100px] h-[100px] rounded-full bg-gray-800 flex items-center justify-center text-white border-4 border-green-400">
                {movie.data?.popularity}
              </span>
              <span>popularity</span>
            </span>
            <span className="font-bold uppercase w-[200px] h-[200px]  flex flex-col  items-center justify-center">
              <span className="w-[100px] h-[100px] rounded-full bg-gray-800 flex items-center justify-center text-white border-4 border-green-400">
                {movie.data?.vote_count}
              </span>
              <span>vote count:</span>
            </span>
          </div>
          <div className="w-[600px] flex items-center justify-between">
            <span className="font-bold uppercase">
              budget:${movie.data?.budget}
            </span>
            <span className="font-bold uppercase">
              revenue:${movie.data?.revenue}
            </span>
          </div>
          <div className="flex flex-col w-[600px] text-left my-[20px] gap-5">
            <span className="font-black uppercase">
              status:{movie.data?.status}
            </span>
            <span className="font-black uppercase">
              original language:{movie.data?.original_language}
            </span>
            <span className="uppercase  font-bold">
              genres:{" "}
              {movie.data?.genres.map((item: { id: number; name: string }) => (
                <span key={item.id}>{item.name},</span>
              ))}
            </span>
          </div>
          <div className="flex flex-col mt-[20px]">
            <span className="w-[100%] text-center font-bold uppercase underline">
              production companies
            </span>
            <div className="flex items-start  p-[40px] gap-10 flex-wrap align-middle">
              {movie.data?.production_companies.map(
                (comp: {
                  id: number;
                  logo_path: string;
                  name: string;
                  origin_country: string;
                }) => (
                  <div
                    key={comp.id}
                    className="flex flex-col items-center justify-between  h-[60px]"
                  >
                    <span className="w-[50px]">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${comp?.logo_path}`}
                        alt={""}
                        className="w-[100%] h-[100%]"
                      />
                    </span>
                    <span className="font-bold ">
                      {comp.name}[{comp.origin_country}]
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <BackButtonGray css="fixed" />
    </>
  );
};
