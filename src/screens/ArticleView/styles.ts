import { StyleSheet } from 'react-native';

import colors from '../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: colors.dark_gray,
        alignItems: 'center'
    },
    textHeader: {
        color: colors.white,
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
    }
})