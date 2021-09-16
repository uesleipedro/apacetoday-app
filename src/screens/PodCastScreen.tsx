import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StatusBar,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import axios from 'axios';

import { CardPodCast } from '../components/CardPodCast';
import { Load } from '../components/Load';

const SPACING = 10;
const urlApi = `https://api.spreaker.com/v2/shows/4251645/episodes`

export default function PodCastScreen() {

    const [episodios, setEpisodios] = useState([]);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);

    async function fetchEpisodios() {

        setLoadingMore(true);
        await axios.get(urlApi)
            .then(response => {
                setEpisodios([...response.data.response.items]);
            })
            .catch(function (error) {
                console.error(error.message);
            })
        setLoadingMore(false);
        setLoading(false);
    }

    function handleFetchMoreEpisodios(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        fetchEpisodios();
    }

    useEffect(() => {
        fetchEpisodios();
    }, []);

    if (loading)
        return <Load />

    return (
        <>

            <StatusBar backgroundColor='#2c5288' />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8ff' }}>

                <FlatList
                    data={episodios}
                    keyExtractor={item => String(item.episode_id)}
                    contentContainerStyle={{
                        padding: SPACING,
                    }}
                    renderItem={({ item }) => (
                        <CardPodCast
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.3}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFetchMoreEpisodios(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore
                            ? <ActivityIndicator color='#79AADB' />
                            : <></>
                    }
                />
            </SafeAreaView>
        </>
    );
}