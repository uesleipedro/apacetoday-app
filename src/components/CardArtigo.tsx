import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

interface CardArtigoProps {
    data: {
        title: string;
        link: string;
        image: string;
        time: string;
    }
}

export const CardArtigo = ({ data }: CardArtigoProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {navigation.navigate('ArtigoView', { link: data.link })}}
        >

            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text
                        style={styles.title}>{data.title}
                    </Text>
                    <View style={styles.time}>
                        <Text style={styles.textTime}>{data.time}</Text>
                    </View>
                </View>

                <Image
                    source={{
                        uri: `${data.image}`
                    }}
                    style={styles.image}
                />

            </View>
        </TouchableOpacity >
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        elevation: 1,
    },
    image: {
        width: 170,
        height: 100,
        borderRadius: 3,
        marginLeft: 2,
        resizeMode: 'contain'
    },
    title: {
        opacity: .6,
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
        opacity: .4,
        fontSize: 12,
        fontWeight: 'bold',
    }
});