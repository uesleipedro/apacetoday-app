import React from 'react';
import {
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Text
} from 'react-native';

import colors from '../assets/styles/colors';

const ModalBottom = ({ texto, modalVisible, setModalVisible }) => {

    return (
        <Modal
            animationType="slide"
            style={styles.modal}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalView}>
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.exitModal}
                >
                    <View >
                        <Text style={styles.exitModalX}>X</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.modalText}>{texto}</Text>
            </View>
        </Modal>
    );
}

export default ModalBottom;

const styles = StyleSheet.create({
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
});