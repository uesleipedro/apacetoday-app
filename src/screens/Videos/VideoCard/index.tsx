import React from 'react';
import {
    View,
    Image,
    Linking,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './styles';
import { CardVideoProps } from '../../../utils/types';

const VideoCard = ({ title, idVideo }: CardVideoProps) => {
    const videoLink = 'https://www.youtube.com/watch?v=';

    return (
        <TouchableOpacity onPress={() => {
            Linking.openURL(`${videoLink}${idVideo}`)
        }}>
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
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
};

export default VideoCard;
