import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Load } from './Load';

import { CardNews } from './CardNews';

const SPACING = 10;

const urlApi = `https://spacetoday.herokuapp.com/externalArticles/`

export default function ArtigoList() {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    async function fetchNews() {

        setLoadingMore(true);
        await axios.get(urlApi + page)
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

        <View style={{ flex: 1, backgroundColor: '#f2f6f7' }}>

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Home')
                    }} >
                    <Icon name='arrowleft' size={30} color='#FFF' />
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
    backgroundColor: '#2c5288',
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