import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import {
    StatusBar,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../assets/styles/colors';

const url = 'https://www.spacetodaystore.com/';

function StoreScreen() {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 5,
        margin: 10,
        backgroundColor: '#457B9D',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    }
})

export default StoreScreen;