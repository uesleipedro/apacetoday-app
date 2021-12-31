import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CardArtigoProps } from '../../../utils/types';
import styles from './styles';

export const ArticleCard = ({ data }: CardArtigoProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('ArticleView', { pageLink: data.link }) }}
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


