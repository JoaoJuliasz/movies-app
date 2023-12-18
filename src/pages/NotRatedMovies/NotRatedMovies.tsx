import { useContext, useEffect, useMemo } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import MovieCard from '../../components/MovieCard';
import { AppContext } from '../../context/Context';

type Props = {}

const NotRatedMovies = (props: Props) => {

    const context = useContext(AppContext)

    const movieToBeRated = useMemo(() => {
        return context?.movies[0]
    }, [context?.movies])

    return (
        <View style={styles.container}>
            <MovieCard movie={movieToBeRated!} />
        </View>
    );
};

export default NotRatedMovies;

const styles = StyleSheet.create({
    container: {}
});
