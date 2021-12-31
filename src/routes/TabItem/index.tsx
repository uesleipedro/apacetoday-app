import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import colors from '../../assets/styles/colors';
import styles from './styles';

const TabItem = ({ focused, name, img }) => {
    return (
        <View style={styles.container}>
            <Image
                source={img}
                resizeMode='contain'
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? colors.gold_text : colors.light_text,
                }}
            />
            <Text
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 12,
                    color: focused ? colors.gold_text : colors.light_text,
                    fontWeight: 'bold',
                    opacity: 0.5,
                    marginTop: 2
                }}
            >{name}</Text>
        </View>
    );
}

export default TabItem;