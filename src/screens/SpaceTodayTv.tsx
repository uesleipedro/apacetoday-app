import React, { useEffect, useState }  from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { apiScraping } from '../services/api';
import colors from '../assets/styles/colors';

export default function SpaceTodayTv() {
    const navigation = useNavigation<any>();
    const [configuracoes, setConfiguracoes] = useState('');

    async function fetchConfigurations() {

        await apiScraping.get('/configuracoes/spacetoday2')
            .then(response => {
                let teste = [response.data.configuracoes]
                setConfiguracoes(teste[0][0].value);
            })
            .catch(function (error) {
                console.error(error.message);
            })
    }

    useEffect(() => {
        fetchConfigurations();
    }, []);

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Home')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Programação 24hs</Text>
                </View>
            </View>
            <WebView
                allowsFullscreenVideo
                allowsInlineMediaPlayback
                mediaPlaybackRequiresUserAction
                source={{ uri: 'https://www.youtube.com/embed/'+configuracoes}}
            />
        </>
    );
}



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: colors.dark_gray,
        alignItems: 'center',
    },
    textHeader: {
        color: colors.light_text,
        fontWeight: 'bold',
        fontSize: 20
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
    },
});