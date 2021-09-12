import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import { CardArtigo } from './CardArtigo';

const SPACING = 10;

const urlApi = `https://spacetoday.herokuapp.com/articles/`

export default function ArtigoList() {

    const [artigos, setArtigos] = useState([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    async function fetchArtigos() {

        setLoadingMore(true);
        await axios.get(urlApi + page)
            .then(response => {
                setArtigos([...artigos, ...response.data.data]);
                setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })
        setLoadingMore(false);
    }

    function handleFetchMoreArtigos(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        fetchArtigos();
    }

    useEffect(() => {
        fetchArtigos();
    }, []);

    return (

        <View style={{ flex: 1, backgroundColor: '#f8f8ff' }}>

            <FlatList
                data={artigos}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{
                    padding: SPACING,
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
                        ? <ActivityIndicator color='#79AADB' />
                        : <></>
                }
            />
        </View>
    );
}