import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        flexDirection: 'row',
        paddingRight: 24,
        paddingLeft: 24
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        color: '#FFF',
        height: 54,
        borderRadius: 6,
        fontSize: 16,
        padding: 16,
        marginRight: 4
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    icon: {
        fontSize: 16,
        color: '#F2F2F2'
    }
});
