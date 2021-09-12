import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Linking,
    Text,
    TouchableOpacity
} from 'react-native';

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
        paddingHorizontal: 5
    }
});