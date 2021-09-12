import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Author() {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Home')
                    }} >
                    <Icon name='arrowleft' size={30} color='#FFF' />
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
                        Formado em geofísica pelo IAG da USP, mestre em engenharia do petróleo pela UNICAMP e doutor em geociências pela UNICAMP. Sérgio está à frente do Space Today, o maior canal de notícias sobre astronomia do Brasil.
                    </Text>
                </View>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c5288',
    },
    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#2c5288',
        alignItems: 'center',
    },
    textHeader: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
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
        backgroundColor: '#FFF',
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
        opacity: .7,
        textAlign: 'center',
        marginTop: 10
    },
    formacao: {
        fontSize: 14,
        fontWeight: 'bold',
        opacity: .4,
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        opacity: .5,
        textAlign: 'justify',
        marginTop: 20,
        marginHorizontal: 20,
        lineHeight: 25
    }
});