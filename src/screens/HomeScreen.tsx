import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Images from '../assets';
import colors from '../assets/styles/colors';
import { color } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor= {colors.dark_gray} />
            <View style={styles.header}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/rocket-white.png')}
                    />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Salve, Salve, amigos
                    </Text>
                    <Text style={styles.subtitle}>
                        da astronomia em todo o mundo! 
                    </Text>
                </View>
            </View>
            <View style={styles.body}>

                <TouchableOpacity
                    style={styles.containerOutros}
                    onPress={() => { navigation.navigate('NewsList') }} >
                    <View style={styles.item1}>
                        <Image
                            source={Images.article}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: colors.gold_text,//'#FFF'
                            }}
                        />
                        <Text style={styles.textItem1}>Notícias{'\n'}Astronômicas</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.handleLaunchsGreetings}
                    onPress={() => { navigation.navigate('Author') }}
                >
                    <Text style={styles.textLaunchsGreetings}>
                        Sobre o Autor
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark_gray,
        height: windowHeight
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight * 0.4,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        width: '100%',
        height: 175,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyLogo: {
        height: windowHeight * 0.2, //175,
        width: windowWidth * 0.3,//130
        resizeMode: 'cover'
    },
    title: {
        color: colors.light_text,
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 5,
        textAlign: 'center',
        // fontFamily: 'Glegoo-Bold'
    },
    subtitle: {
        color: '#FFF',
        fontSize: 18,
        color: colors.light_text,
        opacity: 0.8,
        textAlign: 'center'
    },
    body: {
        flex: 1,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: colors.light_gray,
    },
    handleLaunchsGreetings: {
        flexDirection: 'row',
        backgroundColor: colors.dark_gray,
        height: windowHeight * 0.07,
        width: windowWidth * .8,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLaunchsGreetings: {
        color: colors.gold_text,//'#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerOutros: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: windowWidth,
    },
    item1: {
        backgroundColor: colors.dark_gray,
        borderRadius: 20,
        width: windowWidth * .8,
        height: windowHeight * .2,//142,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textItem1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.gold_text,
    },
});

export default Home;