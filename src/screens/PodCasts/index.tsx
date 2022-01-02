import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StatusBar,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';

import { apiSpreaker } from '../../services/api';
import { Load } from '../../components/Load';
import CardPodCast from './CardPodCast';
import colors from '../../assets/styles/colors';

const PodCast = () => {
    const [episodios, setEpisodios] = useState([]);
    const [loadingAnimation, setLoadingAnimation] = useState(false);
    const [pageOpeningAnimation, setPageOpeningAnimation] = useState(true);

    useEffect(() => {
        fetchEpisodes();
    }, []);

    const fetchEpisodes = async () => {
        setLoadingAnimation(true);

        await apiSpreaker.get('episodes')
            .then(response => {
                setEpisodios([...response.data.response.items]);
            })
            .catch(function (error) {
                console.error(error.message);
            });

        setLoadingAnimation(false);
        setPageOpeningAnimation(false);
    }

    const handleFetchNextPage = () => {
        fetchEpisodes();
    }

    if (pageOpeningAnimation)
        return <Load />

    return (
        <>
            <StatusBar backgroundColor={colors.dark_gray} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.light_gray }}>

                <FlatList
                    data={episodios}
                    keyExtractor={item => String(item.episode_id)}
                    contentContainerStyle={{
                        padding: 10,
                    }}
                    renderItem={({ item }) => (
                        <CardPodCast
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.3}
                    onEndReached={({ distanceFromEnd }) =>
                        distanceFromEnd > 1 && handleFetchNextPage()
                    }
                    ListFooterComponent={
                        loadingAnimation
                            ? <ActivityIndicator color={colors.gold_text} size={60} />
                            : <></>
                    }
                />
            </SafeAreaView>
        </>
    );
};

export default PodCast;