import React from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    Text
} from 'react-native';

import styles from './styles';

const ModalBottom = ({ texto, modalVisible, setModalVisible }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <TouchableOpacity
                style={styles.container}
                onPress={() => setModalVisible(!modalVisible)}
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
            </TouchableOpacity>
        </Modal>
    );
}

export default ModalBottom;