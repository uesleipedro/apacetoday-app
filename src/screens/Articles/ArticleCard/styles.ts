import { StyleSheet } from 'react-native';

import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: colors.light_gray,
    },
    image: {
        width: 170,
        height: 100,
        borderRadius: 3,
        marginLeft: 2,
        resizeMode: 'contain'
    },
    title: {
        color: colors.light_text,
        fontSize: 14,
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
        position: 'absolute',
        bottom: 2,
        marginLeft: 5
    },
    textTime: {
        color: colors.gold_text,
        fontSize: 12,
        fontWeight: 'bold',
    }
});