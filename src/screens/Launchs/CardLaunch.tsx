import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { format, parseISO } from "date-fns";
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

import images from '../../assets';
import { CardLaunchProps } from '../../utils/types';
import styles from './styles/CardLaunchStyles';

const CardLaunch = ({ data }: CardLaunchProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('LaunchDetail', { data: data }) }}
        >

            <View style={styles.container}>
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
};

export default CardLaunch;


