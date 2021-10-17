import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Images from '../assets';
import colors from '../assets/styles/colors';
import { color } from 'react-native-reanimated';

interface CardNewsProps {
    data: {
        title: string;
        link: string;
    }
}

export const CardNews = ({ data }: CardNewsProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('NewsView', { link: data.link }) }}
        >

            <View style={styles.container}>
                <View style={{
                    width: '20%',
                    backgroundColor: colors.light_gray,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <View
                        style={{
                            width: 0.5,
                            height: '100%',
                            backgroundColor: '#cfd8dc',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                position: 'relative',
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: colors.gold_text,
                            }}
                        ></View>
                    </View>
                </View>
                <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    width: '75%',
                    paddingTop: 20,
                    justifyContent: 'space-between'
                }}>
                    <Text
                        style={styles.title}>{data.title}
                    </Text>
                    <View
                        style={{
                            backgroundColor: colors.light_text,
                            opacity: .2,
                            height: 1
                        }}></View>
                </View>
            </View>
        </TouchableOpacity >
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.light_gray,
        height: 100,
    },
    title: {
        color: colors.light_text,
        fontSize: 16,
        fontWeight: '700',
        paddingBottom: 20
    },
});