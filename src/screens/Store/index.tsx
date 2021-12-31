import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import {
    StatusBar,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../assets/styles/colors';
import styles from './styles';

const url = 'https://www.spacetodaystore.com/';

const Store = () => {
    const webViewRef = useRef(null);
    const navigation = useNavigation();

    const goback = () => {
        webViewRef.current.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.dark_gray} />

            <WebView
                ref={webViewRef}
                source={{ uri: url }}
            />

            <TouchableOpacity style={styles.floatingButton} onPress={goback}>
                <Icon name='arrowleft' size={20} color='#FFF' />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Store;