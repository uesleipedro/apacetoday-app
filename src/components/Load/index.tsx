import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/rocket.json';
import styles from './styles';

export const Load = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
}

