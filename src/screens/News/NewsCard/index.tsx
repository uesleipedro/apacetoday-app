import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CardNewsProps } from '../../../utils/types';
import styles from './styles';

const NewsCard = ({ data }: CardNewsProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('NewsView', { pageLink: data.link }) }}
        >

            <View style={styles.container}>
                <View style={styles.dotContainer}>
                    <View style={styles.dot} />
                </View>

                <View style={styles.row}>
                    <Text
                        style={styles.title}>{data.title}
                    </Text>
                    
                    <View
                        style={styles.separateLine}>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    );
};

export default NewsCard;
