import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { format, parseISO } from "date-fns";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import colors from '../../assets/styles/colors';
import { CardLaunchProps } from '../../utils/types';

const LaunchDetail = ({ route }) => {
    let { data }: CardLaunchProps = route.params;
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Launchs')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Detalhe do lançamento
                    </Text>
                </View>
            </View>

            <ImageBackground source={{ uri: data.image }} resizeMode="cover" style={styles.image}>
                <LinearGradient
                    colors={['black', 'transparent']}
                    style={{ height: '100%', width: '100%' }}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1.5, y: 0 }}
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 2, justifyContent: 'flex-end' }}>
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
                    </ScrollView>
                </LinearGradient>

            </ImageBackground>
        </View>
    );
};

export default LaunchDetail;

