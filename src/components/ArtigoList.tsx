import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import { apiScraping } from '../services/api';

import { CardArtigo } from './CardArtigo';
import { Load } from './Load';
import colors from '../assets/styles/colors';

export default function ArtigoList() {

    const [artigos, setArtigos] = useState([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(true);

    async function fetchArtigos() {

        setLoadingMore(true);

        await apiScraping.get(`/articles/` + page)
            .then(response => {
                setArtigos([...artigos, ...response.data.data]);
                setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })

        setLoadingMore(false);
        setLoading(false);
    }

    function handleFetchMoreArtigos(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        fetchArtigos();
    }

    function isRefreshSearch() {
        setIsRefreshing(true);
        setArtigos([{}]);
        //setPage(1);
        fetchArtigos();
        setIsRefreshing(false);
    }

    useEffect(() => {
        fetchArtigos();
    }, []);

    if (loading)
        return <Load />

    return (

        <View style={{ flex: 1, backgroundColor: colors.light_gray }}>

            <FlatList
                data={artigos}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{
                    padding: 10,
                }}
                renderItem={({ item, index }) => (
                    <CardArtigo
                        data={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.3}
                onEndReached={({ distanceFromEnd }) =>
                    handleFetchMoreArtigos(distanceFromEnd)
                }
                ListFooterComponent={
                    loadingMore
                        ? <ActivityIndicator color={colors.gold_text} size={60} />
                        : <></>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={isRefreshSearch}
                    />
                }
            />
        </View>
    );
}