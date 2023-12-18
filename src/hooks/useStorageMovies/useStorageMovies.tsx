import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../../types/movie.types";


export const useStorageMovies = () => {

    const getRatedMovies = useCallback(async (): Promise<{ likedMovies: Movie[]; dislikedMovies: Movie[] } | void> => {
        try {
            const likedMovies = await AsyncStorage.getItem('likedMovies') || "[]";
            const dislikedMovies = await AsyncStorage.getItem('dislikedMovies') || "[]";
            return { likedMovies: JSON.parse(likedMovies) as Movie[], dislikedMovies: JSON.parse(dislikedMovies) as Movie[] }
        } catch (e) {
            console.log(e)
        }
    }, [])

    return { getRatedMovies }
};