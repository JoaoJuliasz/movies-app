import { useContext } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { AppContext } from '../context/Context';
import { Movie } from '../types/movie.types';

type Props = {
    movie: Movie | undefined
}

const MovieCard = ({ movie }: Props) => {

    const context = useContext(AppContext)

    const rateMovie = (type: 'like' | 'dislike') => {
        context?.setMovies(prev => {
            prev.splice(0, 1)
            return [...prev]
        })
    }

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
                    width: 250,
                    height: 300
                }} />
            <Button title="like" onPress={() => rateMovie('like')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});


export default MovieCard;