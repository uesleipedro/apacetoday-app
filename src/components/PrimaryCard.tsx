import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;

import colors from '../assets/styles/colors';

interface PrimaryCardProps {
    title: string;
    icon: string;
    screenNavigation: string,
    iconColor: string,
}

export const PrimaryCard = ({ icon, title, screenNavigation, iconColor }: PrimaryCardProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screenNavigation)}
            style={{ marginBottom: 15 }}
        >
            <View style={styles.container}>
                {/* <Icon name={icon} style={styles.icon} color={'red'} /> */}
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: iconColor,
                    }}
                />
                <Text
                    style={styles.title}
                    numberOfLines={2}
                    adjustsFontSizeToFit
                >{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 0.19,
        width: windowHeight * 0.19,
        borderRadius: 10,
        backgroundColor: colors.light_gray,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 2,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center'
    },
    icon: {
        fontSize: 60
    },
});