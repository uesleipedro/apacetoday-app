import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/styles/colors';
import ModalBottom from '../../components/ModalBottom';
import styles from './styles';

const PodCastView = ({ route }) => {
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

export default PodCastView;