import { StyleSheet } from "react-native";

import colors from '../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: colors.light_text,
        fontWeight: 'bold',
        opacity: 0.5,
        marginTop: 2
    }
});