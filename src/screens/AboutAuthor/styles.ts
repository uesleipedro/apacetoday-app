import { StyleSheet } from 'react-native';

import colors from '../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light_gray,
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
    body: {
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: colors.light_gray,
        height: '100%',
        alignItems: 'center',
        paddingTop: 30,
    },
    tinyAuthor: {
        width: 200,
        height: 200,
        borderRadius: 100,

    },
    author: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gold_text,
        opacity: 0.9,
        textAlign: 'center',
        marginTop: 10
    },
    formacao: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.gold_text,
        opacity: .6,
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        color: colors.light_text,
        textAlign: 'justify',
        marginTop: 20,
        marginHorizontal: 20,
        lineHeight: 25
    }
});