
import { useContext } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { AppContext } from '../../context/Context';
import { useStorageMovies } from '../../hooks/useStorageMovies/useStorageMovies';
import { Movie } from '../../types/movie.types';

import { styles } from './styles'

interface ActionsProps {
    movie: Movie
}

const Actions = ({ movie }: ActionsProps) => {

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
        <View style={styles.actions}>
            <TouchableOpacity style={styles.actionsBtn} onPress={() => rateMovie('dislikedMovies')}>
                <Image
                    style={styles.imageBtn}
                    source={require('./images/dislike.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionsBtn, styles.textBtn]} onPress={() => rateMovie('jump')}>
                <Text style={styles.actionText}>Pular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionsBtn} onPress={() => rateMovie('likedMovies')}>
                <Image
                    style={styles.imageBtn}
                    source={require('./images/like.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default Actions;