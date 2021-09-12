import React from 'react';
import { WebView } from 'react-native-webview';
import {
    SafeAreaView,
    View,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

// function LoadingIndicatorView() {
//     return <ActivityIndicator color='#009b88' size='large' />
// }

function PodCastViewScreen({ route }) {
    const { link } = route.params;
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#2c5288' />
            
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('PodCast')
                    }} >
                    <Icon name='arrowleft' size={30} color='#FFF' />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Horizonte de Eventos</Text>
                </View>
            </View>

            <WebView
                // renderLoading={LoadingIndicatorView}
                source={{ uri: link }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#2c5288',
        alignItems: 'center'
    },
    textHeader: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    },
    containerIcon: {
        paddingLeft: 10,
        justifyContent: 'center',
        height: '100%',
        width: '20%'
    },
    containerText: {
        justifyContent: 'center',
        height: '100%',
        width: '80%'
    }
})

export default PodCastViewScreen;