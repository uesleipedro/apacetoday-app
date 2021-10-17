import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Load } from './Load';
import { apiScraping } from '../services/api';
import { CardNews } from './CardNews';
import { color } from 'react-native-reanimated';
import colors from '../assets/styles/colors';

export default function ArtigoList() {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    async function fetchNews() {

        setLoadingMore(true);

        await apiScraping.get(`/externalArticles/` + page)
            .then(response => {
                setNews([...news, ...response.data.data]);
                setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })

        setLoadingMore(false);
        setLoading(false);
    }

    function handleFetchMoreNews(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        fetchNews();
    }

    useEffect(() => {
        fetchNews();
    }, []);

    if (loading)
        return <Load />

    return (

        <View style={{ flex: 1, backgroundColor: colors.light_gray }}>

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Home')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}>
                        Notícias Astronômicas</Text>
                </View>
            </View>

            <FlatList
                data={news}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{
                    //padding: SPACING,
                    //paddingTop: 10
                }}
                renderItem={({ item, index }) => (
                    <CardNews
                        data={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.3}
                onEndReached={({ distanceFromEnd }) =>
                    handleFetchMoreNews(distanceFromEnd)
                }
                ListFooterComponent={
                    loadingMore
                        ? <ActivityIndicator color='#79AADB' />
                        : <></>
                }
            />
        </View>
    );
}
const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: colors.light_gray,
        alignItems: 'center',
    },
    textHeader: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
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
    }
})