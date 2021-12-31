import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

import colors from '../../assets/styles/colors';
import { ArticleCard } from './ArticleCard';
import { api } from '../../services/api';
import { Load } from '../../components/Load';
import styles from './style';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [pageOpeningAnimation, setPageOpeningAnimation] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoadingAnimation(true);

    await api.get(`articles/` + pageNumber)
      .then(response => {
        setArticles([...articles, ...response.data.data]);
        setPageNumber(oldValue => oldValue + 1);
      })
      .catch(function (error) {
        console.error(error.message);
      })

    setLoadingAnimation(false);
    setPageOpeningAnimation(false);
  }

  const handleFetchNextPage = (scrollDistance: number) => {
    if (scrollDistance < 1)
      return;

    fetchArticles();
  }

  const handleRefreshScreen = async () => {
    await api.get(`articles/1`)
      .then(response => {
        setArticles([...response.data.data]);
        setPageNumber(oldValue => oldValue + 1);
      })
      .catch(function (error) {
        console.error(error.message);
      })
  }

  if (pageOpeningAnimation)
    return <Load />

  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar backgroundColor='#1a1a1a' />

      <View style={{ flex: 1, backgroundColor: colors.light_gray }}>

        <FlatList
          data={articles}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={{
            padding: 10,
          }}
          renderItem={({ item }) => (
            <ArticleCard
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
    </SafeAreaView>
  );
}

export default Articles;