import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        paddingTop: 32,
        paddingBottom: 32,
        paddingRight: 24,
        paddingLeft: 24
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottom: '2 solid',
        borderBottomWidth: 1,
        borderBottomColor: '#333'
    },
    created: {
        flexDirection: 'row',
    },
    createdText: {
        color: '#4EA8DE',
        marginRight: 8,
        fontWeight: 'bold',
        fontSize: 14
    },
    number: {
        backgroundColor: '#333',
        color: '#D9D9D9',
        borderRadius: 999,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 12,
        fontWeight: 'bold',
    },
    done: {
        flexDirection: 'row',
    },
    doneText: {
        color: '#8284FA',
        marginRight: 8,
        fontWeight: 'bold',
        fontSize: 14
    },
    list: {
        marginTop: 8
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8
    },
    cardText: {
        fontSize: 14,
        color: '#F2F2F2',
        flex: 1
    },
    cardTextCheked: {
        textDecorationLine: 'line-through',
        textDecorationStyle:'solid',
        fontSize: 14,
        color: '#F2F2F2',
        flex: 1
    },
    unchecked : {
        marginRight: 8,
        fontSize: 17,
        color: '#4EA8DE'
    },
    checked : {
        marginRight: 8,
        fontSize: 17,
        color: '#5E60CE'
    },
    trashBin: {
        marginLeft: 8,
        fontSize: 17,
        color: '#808080'
    }
});