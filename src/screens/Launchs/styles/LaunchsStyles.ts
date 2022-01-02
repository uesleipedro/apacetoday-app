import { StyleSheet } from "react-native";

import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '80%',
        paddingRight: 10
    },
    infoIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: 50
    }
});
