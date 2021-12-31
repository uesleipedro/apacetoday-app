import { StyleSheet, Dimensions } from 'react-native';


import colors from '../../../assets/styles/colors';
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        height: windowHeight * 0.19,
        width: windowHeight * 0.19,
        borderRadius: 10,
        backgroundColor: colors.light_gray,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 2,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center'
    },
    icon: {
        fontSize: 60
    },
});