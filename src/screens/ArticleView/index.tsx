import React from 'react';
import {
    StatusBar,
    View,
    ActivityIndicator,
    SafeAreaView,
    TouchableOpacity,
    Text
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/styles/colors';
import styles from './styles';

function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
}

function ArtigoViewScreen({ route }) {
    const { link } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.dark_gray} />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Artigo')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Blog SpaceToday</Text>
                </View>
            </View>

            <WebView
                renderLoading={LoadingIndicatorView}
                source={{ uri: link }}
            />
        </SafeAreaView>

    );
}

export default ArtigoViewScreen;