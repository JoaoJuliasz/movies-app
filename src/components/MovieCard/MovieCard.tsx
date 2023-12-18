import { useContext } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { useStorageMovies } from '../../hooks/useStorageMovies/useStorageMovies';
import Actions from './Actions';
import { AppContext } from '../../context/Context';
import { Movie } from '../../types/movie.types';
import { styles } from './styles';

type Props = {
    movie: Movie | undefined
}

const MovieCard = ({ movie }: Props) => {

    const context = useContext(AppContext)

    const { setItemInStorage } = useStorageMovies()

    const rateMovie = (type: 'likedMovies' | 'dislikedMovies' | 'jump') => {
        type !== 'jump' && setItemInStorage(movie!, type)
        context?.setMovies(prev => {
            const jumpedMovie = prev.shift()!
            return type === 'jump' ? [...prev, jumpedMovie] : [...prev]
        })
    }

    return (
        <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}` }} resizeMode="cover"
            style={{ flex: 1, backgroundColor: '#ff5656' }} imageStyle={{ opacity: 0.3 }}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
                        }} />
                </View>
                <Actions movie={movie!} />
            </View>
        </ImageBackground>
    );
};

export default MovieCard;