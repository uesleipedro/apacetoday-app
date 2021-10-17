import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

import colors from '../assets/styles/colors';

const Icones = ({ focused, name, img }) => {
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

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: colors.light_text,
        fontWeight: 'bold',
        opacity: 0.5,
        marginTop: 2
    }
});

export default Icones;