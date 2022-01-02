import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

import { api } from '../../services/api';
import { Load } from '../../components/Load';
import { SafeAreaView } from 'react-navigation';
import VideoCard from './VideoCard';
import colors from '../../assets/styles/colors';
import styles from '../Home/styles';

const Videos = () => {
  const [videos, setVideo] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [pageOpeningAnimation, setPageOpeningAnimation] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    setLoadingAnimation(true);

    await api.get(`videos/${pageNumber}`)
      .then(response => {
        setVideo([...videos, ...response.data.videos]);
        setPageNumber(oldValue => oldValue + 1);
      })
      .catch(function (error) {
        console.error(error.message);
      });

    setLoadingAnimation(false);
    setPageOpeningAnimation(false);
  }

  const handleRefreshScreen = async () => {
    await api.get(`/videos/1`)
      .then(response => {
        setVideo([...response.data.videos]);
        setPageNumber(oldValue => oldValue + 1);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  }

  const handleFetchNextPage = () => {
    fetchVideos();
  }

  if (pageOpeningAnimation)
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
            distanceFromEnd > 1 && handleFetchNextPage()
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
    </SafeAreaView>
  );
};

export default Videos;