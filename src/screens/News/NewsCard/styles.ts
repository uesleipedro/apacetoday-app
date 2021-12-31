import { StyleSheet } from "react-native";

import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.light_gray,
        height: 100,
    },
    title: {
        color: colors.light_text,
        fontSize: 16,
        fontWeight: '700',
        paddingBottom: 20
    },
});