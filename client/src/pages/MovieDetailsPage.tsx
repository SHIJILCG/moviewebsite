import { useParams } from "react-router-dom";
import useGetAMovie from "../api/useGetAMovie";
import BackButtonGray from "../Components/BackButtonGray";
import CircularRatingContainer from "../Components/CircularRatingContainer";
import MovieDetailsSpecificFormat from "../Components/MovieDetailsSpecificFormat";
import ProductionCompaniesDetails from "../Components/ProductionCompaniesDetails";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const movie = useGetAMovie((movieId && +movieId) || 1);
  return (
    <>
      <div className=" min-h-[100vh] w-[100vw] relative flex mainPage firstMovieDetialsContainer">
        <div className="w-[100%] max-h-[100vh] h-[100%] absolute z-[-100]">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.data?.backdrop_path}`}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[50%] emptydiv"></div>
        <div className="w-[50%] mt-[100px] z-10 text-center items-center flex flex-col gap-[20px] titleContainer">
          <span className="text-[80px] text-white font-bold uppercase">
            {movie.data?.original_title}
          </span>
          <div className="flex w-[55%] justify-between text-white border-y-2 border-[#aaaaaa] py-[8px] titleContainerinnnerborderContainer">
            <div className="flex gap-[10px]">
              <span>{movie.data?.release_date?.slice(0, 4)}</span>
              <span>{movie.data?.genres[0].name}</span>
              <span>{movie.data?.runtime}m</span>
            </div>
            <div className="flex  gap-[10px] ml-[5px]">
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
      <div className="p-[20px] pt-[50px] bg-slate-400 flex secondMovieDetialsContainer">
        <div className="secondPosterContainer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.data?.poster_path}`}
            alt=""
          />
          <span className="text-[20px] font-bold text-[#fff]">
            {movie.data?.tagline}
          </span>
        </div>
        <div className="flex-col flex text-[#17394b] text-left p-[20px] flex-1 items-center movieFullDetailsContaier">
          <span className="text-[30px] font-bold text-white secondtitile">
            {movie.data?.title}({movie.data?.release_date})
          </span>
          <div className="flex w-[600px] justify-between movieratingContainer">
            <CircularRatingContainer
              Text="vote average"
              voteCount={movie.data?.vote_average}
            />
            <CircularRatingContainer
              Text="popularity"
              voteCount={movie.data?.popularity}
            />
            <CircularRatingContainer
              Text="vote count"
              voteCount={movie.data?.vote_count}
            />
          </div>
          <div className="w-[600px] flex items-center justify-between budgetdiv">
            <MovieDetailsSpecificFormat
              outerContent="budget"
              innerContent={`$${movie.data?.budget}`}
            />
            <MovieDetailsSpecificFormat
              outerContent="revenue"
              innerContent={`$${movie.data?.revenue}`}
            />
          </div>
          <div className="flex flex-col w-[600px] text-left my-[20px] gap-5 statusdiv">
            <MovieDetailsSpecificFormat
              outerContent=" status"
              innerContent={`${movie.data?.status}`}
            />
            <MovieDetailsSpecificFormat
              outerContent="original language"
              innerContent={`${movie.data?.original_language}`}
            />
            <span className="uppercase  font-bold items-center flex flex-wrap">
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
                  <ProductionCompaniesDetails
                    key={comp.id}
                    name={comp.name}
                    logo_path={comp.logo_path}
                    origin_country={comp.origin_country}
                    id={comp.id}
                  />
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
