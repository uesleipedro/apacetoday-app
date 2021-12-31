import { StyleSheet } from "react-native";

import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 140,
        marginBottom: 5,
        backgroundColor: colors.light_gray,
    },
    imageContainer: {
        justifyContent: 'center',
    },
    image: {
        width: 140,
        height: 135,
        borderRadius: 3,
        resizeMode: 'contain',
    },
    title: {
        color: colors.light_text,
        fontSize: 15,
        fontWeight: '700',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5,
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    time: {
        marginBottom: 5
    },
    textTime: {
        color: colors.gold_text,
        fontSize: 12,
        fontWeight: 'bold',
    }
});