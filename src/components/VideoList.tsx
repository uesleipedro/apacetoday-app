import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

import config from '../../config.json';

// import { apiScraping } from '../services/api';
import { apiLocal } from '../services/api';
import { CardVideo } from './CardVideo';
import { Load } from './Load';

export default function VideoList() {

    const [videos, setVideo] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);

    async function fetchVideos() {
        setLoadingMore(true);

        await apiLocal.get(`/videos/` + page)
            .then(response => {
               setVideo([...videos, ...response.data.videos]);
               setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })

        setLoadingMore(false);
        setLoading(false);
    }

    function handleFetchMoreVideos(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        fetchVideos();
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    if (loading)
        return <Load />

    return (

        <View style={{ flex: 1, backgroundColor: '#f8f8ff' }}>
            <FlatList
                data={videos}
                keyExtractor={item => String(item._id)}
                contentContainerStyle={{
                    padding: 10,
                }}
                renderItem={({ item }) => (
                    <CardVideo
                        title={item.title}
                        idVideo={item.link}
                    />
                )}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.3}
                onEndReached={({ distanceFromEnd }) =>
                    handleFetchMoreVideos(distanceFromEnd)
                }
                ListFooterComponent={
                    loadingMore
                        ? <ActivityIndicator color='#2c5288' />
                        : <></>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
});