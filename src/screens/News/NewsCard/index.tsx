import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../../assets/styles/colors';
import {CardNewsProps} from '../../../utils/types';
import styles from './styles';

const NewsCard = ({ data }: CardNewsProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('NewsView', { link: data.link }) }}
        >

            <View style={styles.container}>
                <View style={{
                    width: '20%',
                    backgroundColor: colors.light_gray,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <View
                        style={{
                            position: 'relative',
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            backgroundColor: colors.gold_text,
                        }} />

                </View>
                <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    width: '75%',
                    paddingTop: 20,
                    justifyContent: 'space-between'
                }}>
                    <Text
                        style={styles.title}>{data.title}
                    </Text>
                    <View
                        style={{
                            backgroundColor: colors.light_text,
                            opacity: .2,
                            height: 1
                        }}></View>
                </View>
            </View>
        </TouchableOpacity >
    );
};

export default NewsCard;
