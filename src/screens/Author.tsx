import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../assets/styles/colors';
import { color } from 'react-native-reanimated';

export default function Author() {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.containerIcon}
                        onPress={() => {
                            navigation.navigate('Home')
                        }} >
                        <Icon name='arrowleft' size={30} color={colors.gold_text} />
                    </TouchableOpacity>

                    <View style={styles.containerText}>
                        <Text
                            style={styles.textHeader}>
                            Sobre o Autor</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Image
                        style={styles.tinyAuthor}
                        source={require('../assets/author.jpg')}
                    />

                    <View>
                        <Text style={styles.author}>Sérgio Sacani</Text>
                        <Text style={styles.formacao}>Geofísico pelo IAG da USP</Text>
                        <Text style={styles.description}>
                            Esse aplicativo é uma homenagem ao Sérgio Sacani, formado em geofísica pelo IAG da USP, mestre em engenharia do petróleo pela UNICAMP e doutor em geociências pela UNICAMP.
                            Sérgio está à frente do Space Today, o maior canal de notícias sobre astronomia do Brasil; e também está à frente do canal Ciência Sem Fim.
                    </Text>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light_gray,
    },
    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: colors.dark_gray,
        alignItems: 'center',
    },
    textHeader: {
        color: colors.light_text,
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
    },
    body: {
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: colors.light_gray,
        height: '100%',
        alignItems: 'center',
        paddingTop: 30,
    },
    tinyAuthor: {
        width: 200,
        height: 200,
        borderRadius: 100,

    },
    author: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gold_text,
        opacity: 0.9,
        textAlign: 'center',
        marginTop: 10
    },
    formacao: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.gold_text,
        opacity: .6,
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        color: colors.light_text,
        textAlign: 'justify',
        marginTop: 20,
        marginHorizontal: 20,
        lineHeight: 25
    }
});