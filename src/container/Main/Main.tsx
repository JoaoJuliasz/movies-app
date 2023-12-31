import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import instance from '../../instance/instance';
import { Movie } from '../../types/movie.types';
import NotRatedMovies from '../../pages/NotRatedMovies/NotRatedMovies';
import LikedMovies from '../../pages/LikedMovies/LikedMovies';
import DislikedMovies from '../../pages/DislikedMovies/DislikedMovies';
import { useStorageMovies } from '../../hooks/useStorageMovies/useStorageMovies';
import { AppProvider } from '../../context/Context';

const DrawerNavigatorConfig = {
    intialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white',
        },
    },
    contentOptions: {
        // add your styling here 
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1,
        },
    },
    drawerBackgroundColor: '#262A2C', // sets background color of drawer
};


const Drawer = createDrawerNavigator();

const Main = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const { getRatedMovies } = useStorageMovies()

    const fetchMovies = async () => {
        setLoading(true)
        try {
            const ratedMovies = await getRatedMovies()
            const data = await instance.get('discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
            const movies: Movie[] = data.data.results
            const likedMovies = ratedMovies?.likedMovies.map(liked => liked.id)
            const dislikedMovies = ratedMovies?.dislikedMovies.map(disliked => disliked.id)
            const filteredMovies = movies.filter(data => !likedMovies?.includes(data.id) && !dislikedMovies?.includes(data.id))
            setMovies(filteredMovies)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    if (loading) return <Text>'...loading'</Text>

    return (
        <AppProvider value={{ movies, setMovies }}>
            <Drawer.Navigator initialRouteName='NotRated'
                screenOptions={{
                    headerTitle: () => <Image source={require('../../../assets/logo.png')} />,
                    headerStyle: {
                        backgroundColor: '#ff1c1c',
                    }
                }}>
                <Drawer.Screen name="NotRated" component={NotRatedMovies} />
                <Drawer.Screen name="Liked" component={LikedMovies} />
                <Drawer.Screen name="Disliked" component={DislikedMovies} />
            </Drawer.Navigator>
        </AppProvider>
    );
};

export default Main;