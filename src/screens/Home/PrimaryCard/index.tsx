import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { PrimaryCardProps } from '../../../utils/types';

export const PrimaryCard = ({ icon, title, screenNavigation, iconColor }: PrimaryCardProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screenNavigation)}
            style={{ marginBottom: 15 }}
        >
            <View style={styles.container}>
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: iconColor,
                    }}
                />
                <Text
                    style={styles.title}
                    numberOfLines={2}
                    adjustsFontSizeToFit
                >{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
