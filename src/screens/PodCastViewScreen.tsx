import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import {
    SafeAreaView,
    View,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';
import ModalBottom from '../components/ModalBottom';

function PodCastViewScreen({ route }) {
    const { link } = route.params;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.container}>
            <ModalBottom
                texto="Streaming obtido pela API do Spreaker. Ao ouvir o PodCast pelo app, estará gerando view diretamente na conta do Spreaker do Sérgio Sacani."
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <StatusBar backgroundColor={colors.dark_gray} />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('PodCast')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Horizonte de Eventos
                    </Text>

                    <Icon
                        name="infocirlceo"
                        size={20}
                        color={colors.gold_text}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </View>

            <WebView
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
        backgroundColor: colors.dark_gray,
        alignItems: 'center'
    },
    textHeader: {
        color: colors.white,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '80%',
        paddingRight: 10
    },
    modal: {

    },
    modalView: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        height: '30%',
        width: '100%',
        backgroundColor: colors.dark_gray,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingHorizontal: 20,
    },
    modalText: {
        color: colors.white,
        fontSize: 18,
        textAlign: 'justify',
        lineHeight: 30,
    },
    exitModal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: colors.white,
        height: 30,
        width: 30,
        borderRadius: 30,
        top: -10,
        right: 5,
    },
    exitModalX: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.dark_gray,
    }
})

export default PodCastViewScreen;