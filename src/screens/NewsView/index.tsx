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

const NewsView = ({ route }) => {
    const { pageLink } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.dark_gray} />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('News')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Notícias Astronômicas</Text>
                </View>
            </View>

            <WebView
                renderLoading={LoadingIndicatorView}
                source={{ uri: pageLink }}
            />
        </SafeAreaView>

    );
}

export default NewsView;