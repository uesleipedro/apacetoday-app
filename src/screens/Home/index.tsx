import React from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Images from '../../assets';
import { PrimaryCard } from '../../components/PrimaryCard';
import colors from '../../assets/styles/colors';
import styles from './styles';

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
                        screenNavigation={'News'}
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
                        screenNavigation={'AboutAuthor'}
                        iconColor={colors.gold_text}
                    />

                    <PrimaryCard
                        icon={Images.rocket}
                        title={'Lançamentos'}
                        screenNavigation={'Launchs'}
                        iconColor={colors.gold_text}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;