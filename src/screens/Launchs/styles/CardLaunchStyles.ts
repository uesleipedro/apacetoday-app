import { StyleSheet } from "react-native";

import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: colors.light_gray,
    },
    image: {
        width: 80,
        height: 120,
        borderRadius: 3,
        marginLeft: 2,
        resizeMode: 'cover'
    },
    noimage: {
        width: 80,
        height: 120,
        borderRadius: 3,
        marginLeft: 2,
        opacity: 0.7
    },
    text: {
        flex: 1,
        color: colors.light_text,
        fontSize: 14,
        fontWeight: '700',
    },
    titleContainer: {
        flex: 3,
        justifyContent: 'center',
        marginLeft: 5,
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    time: {
        position: 'absolute',
        bottom: 2,
        marginLeft: 5
    },
    label: {
        color: colors.gold_text,
        fontSize: 14,
        fontWeight: 'bold',
    },
    fieldset: {
        display: 'flex',
        flexDirection: 'row',
    }
});
