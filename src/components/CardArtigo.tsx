import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';

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