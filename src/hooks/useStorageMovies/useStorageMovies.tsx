import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../../types/movie.types";


export const useStorageMovies = () => {

    const getItemFromStorage = useCallback(async (type: 'likedMovies' | 'dislikedMovies'): Promise<Movie[]> => {
        const storageRatedMovies = await AsyncStorage.getItem(type) || "[]";
        return JSON.parse(storageRatedMovies) as Movie[]
    }, [])

    const getRatedMovies = useCallback(async (): Promise<{ likedMovies: Movie[]; dislikedMovies: Movie[] } | void> => {
        try {
            const likedMovies = await getItemFromStorage('likedMovies')
            const dislikedMovies = await getItemFromStorage('dislikedMovies')
            return { likedMovies, dislikedMovies }
        } catch (e) {
            console.log(e)
        }
    }, [getItemFromStorage])

    const setItemInStorage = useCallback(async (item: Movie, type: 'likedMovies' | 'dislikedMovies') => {
        try {
            const ratedMovies = await getItemFromStorage(type)
            ratedMovies.push(item)
            const jsonValue = JSON.stringify(ratedMovies)
            await AsyncStorage.setItem(type, jsonValue)
        } catch (e) {
            // saving error
            console.log(e)
        }
    }, [getItemFromStorage])

    return { getRatedMovies, setItemInStorage, getItemFromStorage }
};