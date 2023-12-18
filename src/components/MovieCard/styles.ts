import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        // backgroundColor: '#ff1c1c'
    },
    wrapper: {
        flex: 3,
        width: '100%',
        height: '100%',
        marginBttom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    actionsBtn: {
        padding: 12,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imageBtn: {
        width: 40,
        height: 40
    },
    textBtn: {
        flex: 1,
        maxWidth: 150
    },
    actionText: {
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        // height: 20
    }
});