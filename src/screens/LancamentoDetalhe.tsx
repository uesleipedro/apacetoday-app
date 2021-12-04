import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { format, parseISO } from "date-fns";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';

const LancamentoDetalhe = ({ route }: any) => {
    let data = route.params.data;
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Lancamentos')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Detalhe lançamento</Text>
                </View>
            </View>

            <ImageBackground source={{ uri: data.image }} resizeMode="cover" style={styles.image}>
                <LinearGradient
                    colors={['black', 'transparent']}
                    style={{ height: '100%', width: '100%' }}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1.5, y: 0 }}
                >
                    <View style={styles.textContainer}>
                        <View style={styles.fieldset}>
                            <Text style={styles.label}>Missão: </Text>
                            <Text style={styles.text}>{data.name}</Text>
                        </View>

                        <View style={styles.fieldset}>
                            <Text style={styles.label}>Empresa: </Text>
                            <Text style={styles.text}>{data.company}</Text>
                        </View>

                        <View style={styles.fieldset}>
                            <Text style={styles.label}>Foguete: </Text>
                            <Text style={styles.text}>{data.rocketName}</Text>
                        </View>

                        <View style={styles.fieldset}>
                            <Text style={styles.label}>Data: </Text>
                            <Text style={styles.text}>{format(parseISO(data.date), "dd/MM/yyyy kk:mm:ss")}</Text>
                        </View>

                        <View style={styles.fieldset}>
                            <Text style={styles.label}>Local: </Text>
                            <Text style={styles.text}>{data.locationName}</Text>
                        </View>

                        <View style={styles.fieldset}>
                            <Text style={styles.label}>Pad de lançamento: </Text>
                            <Text style={styles.text}>{data.pad}</Text>
                        </View>

                        <Text style={styles.labelDescription}>Descrição: </Text>
                        <Text style={styles.textDescription}>{data.description}</Text>

                    </View>
                </LinearGradient>

            </ImageBackground>
        </View>
    );
};

export default LancamentoDetalhe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    image: {
        flex: 1,
        justifyContent: "center"
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
        paddingLeft: 10,
        paddingBottom: 20
    },
    text: {
        flex: 1,
        color: colors.light_text,
        fontSize: 18,
        fontWeight: '700',
    },
    textDescription: {
        color: colors.light_text,
        fontSize: 18,
        fontWeight: '700',
    },
    label: {
        color: colors.gold_text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    labelDescription: {
        color: colors.gold_text,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    fieldset: {
        display: 'flex',
        flexDirection: 'row',
    },
    fieldsetDescricao: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
    },
});