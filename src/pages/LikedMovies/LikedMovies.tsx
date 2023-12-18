import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useStorageMovies } from '../../hooks/useStorageMovies/useStorageMovies';
import { Movie } from '../../types/movie.types';

type Props = {}

const LikedMovies = () => {

    const [liked, setLiked] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const { getItemFromStorage } = useStorageMovies()

    const getFavoritedMovies = async () => {
        const favorited = await getItemFromStorage('likedMovies')
        setLiked(favorited)
        setLoading(false)
    }

    useEffect(() => {
        getFavoritedMovies()
    }, [])

    if(loading) return <Text>Loading...</Text>

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(liked)}</Text>
        </View>
    );
};

export default LikedMovies;

const styles = StyleSheet.create({
    container: {}
});
