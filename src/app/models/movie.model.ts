export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
  Plot?: string;
  Director?: string;
  Actors?: string;
  Genre?: string;
  imdbRating?: string;
}

export interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}