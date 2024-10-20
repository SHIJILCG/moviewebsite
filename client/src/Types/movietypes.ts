export type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type whishlistType = {
  id: number;
  movies: MovieDetailsType;
};
export type whishlistTypeTwo = {
  id: number;
  movie: MovieDetailsType;
};

export type ContainerType = "WhishList" | "WatchLater";



export type ProductionCompaniesDetailsProsType = {
  id: number;
  logo_path: string;
  origin_country: string;
  name: string;
};