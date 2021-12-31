import { StyleSheet } from 'react-native';

import colors from '../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 60,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '80%',
        paddingRight: 10
    },
    modal: {

    },
    modalView: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        height: '30%',
        width: '100%',
        backgroundColor: colors.dark_gray,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingHorizontal: 20,
    },
    modalText: {
        color: colors.white,
        fontSize: 18,
        textAlign: 'justify',
        lineHeight: 30,
    },
    exitModal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: colors.white,
        height: 30,
        width: 30,
        borderRadius: 30,
        top: -10,
        right: 5,
    },
    exitModalX: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.dark_gray,
    }
})