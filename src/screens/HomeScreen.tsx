import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Images from '../assets';
import colors from '../assets/styles/colors';
import { PrimaryCard } from '../components/PrimaryCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={colors.dark_gray} />
                <View style={styles.header}>

                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.tinyLogo}
                            source={Images.shuttle}
                            resizeMode='contain'
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

                    <PrimaryCard
                        icon={Images.article}
                        title={'Notícias Astronômicas'}
                        screenNavigation={'NewsList'}
                        iconColor={colors.gold_text}
                    />

                    <PrimaryCard
                        icon={Images.video}
                        title={'SpaceToday 2'}
                        screenNavigation={'SpaceTodayTv'}
                        iconColor={colors.gold_text}
                    />

                    <PrimaryCard
                        icon={Images.authorIcon}
                        title={'Sobre o Autor'}
                        screenNavigation={'Author'}
                        iconColor={colors.gold_text}
                    />

                    <PrimaryCard
                        icon={Images.rocket}
                        title={'Lançamentos'}
                        screenNavigation={'Lancamentos'}
                        iconColor={colors.gold_text}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark_gray,
        height: windowHeight * 0.92,
        paddingBottom: 20
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
        flex: 1
    },
    title: {
        color: colors.light_text,
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 5,
        textAlign: 'center',
        fontFamily: 'Glegoo-Bold'
    },
    subtitle: {
        fontSize: 18,
        color: colors.light_text,
        opacity: 0.8,
        textAlign: 'center'
    },
    body: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '5%',
        justifyContent: 'space-evenly',
        backgroundColor: colors.dark_gray,
    },
    handleAuthor: {
        flexDirection: 'row',
        backgroundColor: colors.light_gray,
        height: windowHeight * 0.07,
        width: windowWidth * .8,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLaunchsGreetings: {
        color: colors.gold_text,
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