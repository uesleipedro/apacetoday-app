import React from 'react';
import {
    View,
    StyleSheet,
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

import colors from '../assets/styles/colors';

interface CardPodCastProps {
    data: {
        title: string;
        image_url: string;
        published_at: string; //data de publicação
        duration: string; //duração do vídeo
        playback_url: string;
    }
}

export const CardPodCast = ({ data }: CardPodCastProps) => {

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
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 140,
        marginBottom: 5,
        backgroundColor: colors.light_gray,
    },
    imageContainer: {
        justifyContent: 'center',
    },
    image: {
        width: 140,
        height: 135,
        borderRadius: 3,
        resizeMode: 'contain',
    },
    title: {
        color: colors.light_text,
        fontSize: 15,
        fontWeight: '700',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5,
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    time: {
        marginBottom: 5
    },
    textTime: {
        color: colors.gold_text,
        fontSize: 12,
        fontWeight: 'bold',
    }
});