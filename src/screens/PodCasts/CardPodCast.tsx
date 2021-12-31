import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    parseISO,
    format,
} from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { useNavigation } from '@react-navigation/native';

import { CardPodCastProps } from '../../utils/types';
import styles from './styles/CardPodCastStyles';

const CardPodCast = ({ data }: CardPodCastProps) => {

    const navigation = useNavigation();
    const date = parseISO(data.published_at);

    const formattedDate = format(
        date,
        "'Dia' dd 'de' MMMM' de 'yyyy'",
        { locale: ptBR }
    );

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PodCastViewScreen', { link: data.playback_url })
            }}>
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <View style={styles.time}>
                        <Text style={styles.textTime}>
                            {formattedDate}
                        </Text>
                    </View>
                    <Text style={styles.title}>
                        {data.title}
                    </Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: `${data.image_url}`
                        }}
                        style={styles.image}
                    />
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default CardPodCast;


