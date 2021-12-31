import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

import { apiScraping } from '../../services/api';
import VideoCard from './VideoCard';
import { Load } from '../../components/Load';
import colors from '../../assets/styles/colors';
import { SafeAreaView } from 'react-navigation';
import styles from '../Home/styles';

export default function VideoList() {

  const [videos, setVideo] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function fetchVideos() {
    setLoadingMore(true);

    await apiScraping.get(`/videos/` + page)
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

  async function isRefreshSearch() {
    setIsRefreshing(true);

    await apiScraping.get(`/videos/1`)
      .then(response => {
        setVideo([...response.data.videos]);
        setPage(oldValue => oldValue + 1);
      })
      .catch(function (error) {
        console.error(error.message);
      })
    setIsRefreshing(false);
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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: colors.light_gray }}>
        <FlatList
          data={videos}
          keyExtractor={item => String(item._id)}
          contentContainerStyle={{
            padding: 10,
          }}
          renderItem={({ item }) => (
            <VideoCard
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
    </SafeAreaView>
  );
};
