import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface PrimaryCardProps {
    title: string;
    icon: string;
    iconColor: string
    screenNavigation: string
}

export const PrimaryCard = ({ icon, title, iconColor, screenNavigation }: PrimaryCardProps) => {
    
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screenNavigation)}
        >
            <View style={styles.container}>
                <Icon name={icon} style={styles.icon} color={iconColor} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 176,
        borderRadius: 10,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#b3aec8'
    },
    icon: {
        fontSize: 60
    },
});