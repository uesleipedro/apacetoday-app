import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { format, parseISO } from "date-fns";
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

import images from '../assets';
import colors from '../assets/styles/colors';

interface CardLaunchProps {
    data: {
        name: string;
        date: string;
        image: string;
        company: string;
        pad: string;
        rocketName: string;
        missionName: string;
        description: string;
        missionType: string;
        locationName: string;
    }
}

export const CardLaunch = ({ data }: CardLaunchProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('LancamentoDetalhe', { data: data }) }}
        >

            <View style={styles.container}>
                {/* {data.image === null
                    ? (
                        <Image
                            source={images.noimage}
                            style={styles.noimage}
                        />
                    ) : (
                        <Image
                            source={{
                                uri: `${data.image}`
                            }}
                            style={styles.image}
                        />
                    )} */}
                {data.image === null
                    ? (
                        <FastImage
                            style={{ width: 80, height: 120 }}
                            source={images.noimage}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    ) : (
                        <FastImage
                            style={{ width: 80, height: 120 }}
                            source={{
                                uri: `${data.image}`,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    )}

                <View style={styles.titleContainer}>
                    <View style={styles.fieldset}>
                        <Text style={styles.label}>Missão: </Text>
                        <Text style={styles.text}>{data.name || ''}</Text>
                    </View>

                    <View style={styles.fieldset}>
                        <Text style={styles.label}>Foguete: </Text>
                        <Text style={styles.text}>{data.rocketName || ''}</Text>
                    </View>

                    <View style={styles.fieldset}>
                        <Text style={styles.label}>Data: </Text>
                        <Text style={styles.text}>{format(parseISO(data.date), "dd/MM/yyyy kk:mm:ss") || ''}</Text>
                    </View>

                    <View style={styles.fieldset}>
                        <Text style={styles.label}>Local: </Text>
                        <Text style={styles.text}>{data.locationName || ''}</Text>
                    </View>

                </View>

            </View>
        </TouchableOpacity >
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: colors.light_gray,
    },
    image: {
        width: 80,
        height: 120,
        borderRadius: 3,
        marginLeft: 2,
        resizeMode: 'cover'
    },
    noimage: {
        width: 80,
        height: 120,
        borderRadius: 3,
        marginLeft: 2,
        opacity: 0.7
    },
    text: {
        flex: 1,
        color: colors.light_text,
        fontSize: 14,
        fontWeight: '700',
    },
    titleContainer: {
        flex: 3,
        justifyContent: 'center',
        marginLeft: 5,
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    time: {
        position: 'absolute',
        bottom: 2,
        marginLeft: 5
    },
    label: {
        color: colors.gold_text,
        fontSize: 14,
        fontWeight: 'bold',
    },
    fieldset: {
        display: 'flex',
        flexDirection: 'row',
    }
});