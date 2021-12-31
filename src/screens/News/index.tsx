import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    RefreshControl
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Load } from '../../components/Load';
import { api } from '../../services/api';
import NewsCard from './NewsCard';
import colors from '../../assets/styles/colors';
import styles from './styles';

const News = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loadingAnimation, setLoadingAnimation] = useState(false);
    const [pageOpeningAnimation, setPageOpeningAnimation] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        setLoadingAnimation(true);

        await api.get(`externalArticles/` + page)
            .then(response => {
                setNews([...news, ...response.data.data]);
                setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })

        setLoadingAnimation(false);
        setPageOpeningAnimation(false);
    }

    const handleFetchNextPage = (distance: number) => {
        if (distance < 1)
            return;

        setLoadingAnimation(true);
        fetchNews();
    }

    const handleRefreshScreen = async () => {
        await api.get(`externalArticles/1`)
            .then(response => {
                setNews([...response.data.data]);
                setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })
    }

    if (pageOpeningAnimation)
        return <Load />

    return (
        <View style={styles.container}>
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
                renderItem={({ item }) => (
                    <NewsCard
                        data={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.3}
                onEndReached={({ distanceFromEnd }) =>
                    handleFetchNextPage(distanceFromEnd)
                }
                ListFooterComponent={
                    loadingAnimation
                        ? <ActivityIndicator color={colors.gold_text} size={60} />
                        : <></>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={handleRefreshScreen}
                    />
                }
            />
        </View>
    );
};

export default News;
