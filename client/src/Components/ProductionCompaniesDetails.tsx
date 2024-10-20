import { ProductionCompaniesDetailsProsType } from "../Types/movietypes";
export default function ProductionCompaniesDetails({
  id,
  logo_path,
  origin_country,
  name,
}: ProductionCompaniesDetailsProsType) {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-between  h-[60px]"
    >
      <span className="w-[50px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${logo_path}`}
          alt={""}
          className="w-[100%] h-[100%]"
        />
      </span>
      <span className="font-bold ">
        {name}[{origin_country}]
      </span>
    </div>
  );
}
