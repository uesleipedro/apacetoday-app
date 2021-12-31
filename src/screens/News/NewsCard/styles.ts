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
    dot: {
        position: 'relative',
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: colors.gold_text,
    },
    dotContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        paddingLeft: 10,
        paddingRight: 10,
        width: '75%',
        paddingTop: 20,
        justifyContent: 'space-between'
    },
    separateLine: {
        backgroundColor: colors.light_text,
        opacity: .2,
        height: 1
    }
});