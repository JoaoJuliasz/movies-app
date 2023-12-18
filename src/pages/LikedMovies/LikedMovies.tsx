import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {}

const DislikedMovies = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>DislikedMovies</Text>
        </View>
    );
};

export default DislikedMovies;

const styles = StyleSheet.create({
    container: {}
});
