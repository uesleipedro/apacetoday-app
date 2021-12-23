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
import { CardArtigo } from '../../components/ArticleCard';
import { apiScraping } from '../../services/api';
import { Load } from '../../components/Load';
import styles from './style';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingMoreArticles, setLoadingMoreArticles] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {

    setLoadingMoreArticles(true);

    await apiScraping.get(`/articles/` + pageNumber)
      .then(response => {
        setArticles([...articles, ...response.data.data]);
        setPageNumber(oldValue => oldValue + 1);
      })
      .catch(function (error) {
        console.error(error.message);
      })

    setLoadingMoreArticles(false);
    setInitialLoading(false);
  }

  const handleFetchMoreArtigos = (scrollDistance: number) => {
    if (scrollDistance < 1)
      return;

    setLoadingMoreArticles(true);
    fetchArticles();
  }

  const handleRefreshScreen = async () => {
    await apiScraping.get(`/articles/1`)
      .then(response => {
        setArticles([...response.data.data]);
        setPageNumber(oldValue => oldValue + 1);
      })
      .catch(function (error) {
        console.error(error.message);
      })
  }

  if (initialLoading)
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
            loadingMoreArticles
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

export default ArticlesList;