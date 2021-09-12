import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

const Icones = ({ focused, name, img }) => {
    return (
        <View style={styles.container}>
            <Image
                source={img}
                resizeMode='contain'
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#598CD4' : '#748c94',
                }}
            />
            <Text style={styles.title}>{name}</Text>
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
        color: '#000',
        fontWeight: 'bold',
        opacity: 0.5,
        marginTop: 2
    }
});

export default Icones;