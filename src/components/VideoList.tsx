import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

import { apiYoutube } from '../services/api';
import { CardVideo } from './CardVideo';
import { Load } from './Load';

const SPACING = 10;

export default function VideoList() {

    const [videos, setVideo] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);

    async function fetchVideos() {
        setLoadingMore(true);

        await apiYoutube.get('/search', {
            params: {
                pageToken: nextPageToken,
                order: 'date',
                part: 'snippet',
                channelId: 'UC_Fk7hHbl7vv_7K8tYqJd5A',
                maxResults: 11,
                key: 'AIzaSyBmMqVQ63yH-mC8fPp483Oqll7wof3Ps4E'
            }
        })
            .then(response => {
                setVideo([...videos, ...response.data.items]);
                setNextPageToken(response.data.nextPageToken);
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
                keyExtractor={item => String(item.id.videoId)}
                contentContainerStyle={{
                    padding: SPACING,
                }}
                renderItem={({ item }) => (
                    <CardVideo
                        title={item.snippet.title}
                        idVideo={item.id.videoId}
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