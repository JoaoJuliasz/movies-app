import { createContext } from "react";
import { Movie } from "../types/movie.types";

type Values = {
    movies: Movie[]
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

const AppContext = createContext<Values | null>(null);

const AppProvider = AppContext.Provider

export { AppContext, AppProvider }