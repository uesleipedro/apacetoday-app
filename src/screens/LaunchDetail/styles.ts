import { StyleSheet } from "react-native";

import colors from '../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: colors.dark_gray,
        alignItems: 'center',
    },
    textHeader: {
        color: colors.light_text,
        fontWeight: 'bold',
        fontSize: 20
    },
    containerIcon: {
        paddingLeft: 10,
        justifyContent: 'center',
        height: '100%',
        width: '20%'
    },
    containerText: {
        justifyContent: 'center',
        height: '100%',
        width: '80%'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
        paddingLeft: 10,
        paddingBottom: 20,
    },
    text: {
        flex: 1,
        color: colors.light_text,
        fontSize: 18,
        fontWeight: '700',
    },
    textDescription: {
        color: colors.light_text,
        fontSize: 18,
        fontWeight: '700',
    },
    label: {
        color: colors.gold_text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    labelDescription: {
        color: colors.gold_text,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    fieldset: {
        display: 'flex',
        flexDirection: 'row',
    },
    fieldsetDescricao: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
    }
});