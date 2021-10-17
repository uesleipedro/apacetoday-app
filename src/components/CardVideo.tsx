import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Linking,
    Text,
    TouchableOpacity
} from 'react-native';

import colors from '../assets/styles/colors';

interface CardVideoProps {
    title: string;
    idVideo: string;
}

export const CardVideo = ({ title, idVideo }: CardVideoProps) => {

    return (
        <TouchableOpacity onPress={() => {
            Linking.openURL(`https://www.youtube.com/watch?v=${idVideo}`)
        }}>
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text
                        style={styles.title}>{title}</Text>
                </View>

                <Image
                    source={{
                        uri: `https://i.ytimg.com/vi/${idVideo}/mqdefault.jpg`
                    }}
                    style={styles.image}
                />

            </View>
        </TouchableOpacity>
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
        paddingHorizontal: 5
    }
});