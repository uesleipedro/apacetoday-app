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
                    //backgroundColor: '#2C5288',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {/* <Image
                        source={Images.article}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            opacity: .5,
                            tintColor: '#FFF'
                        }}
                    /> */}

                    <View
                        style={{
                            width: 2,
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
                                backgroundColor: '#2C5288',
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
                    <View style={{ backgroundColor: '#000', opacity: .2, height: 1 }}></View>
                </View>
            </View>
        </TouchableOpacity >
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        height: 100,
    },
    title: {
        opacity: .5,
        fontSize: 16,
        fontWeight: '700',
        paddingBottom: 20
    },
});