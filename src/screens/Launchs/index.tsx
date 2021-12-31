import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { apiScraping } from '../../services/api';
import CardLaunch from './CardLaunch';
import { Load } from '../../components/Load';
import ModalBottom from '../../components/ModalBottom';
import colors from '../../assets/styles/colors';
import styles from './styles/LaunchsStyles';

const Launchs = () => {

    const [launchs, setLaunchs] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(true);
    const navigation = useNavigation<any>();
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        fetchRocketLaunch();
    }, []);

    async function fetchRocketLaunch() {

        setLoadingMore(true);

        await apiScraping.get(`/getLaunchs/${page}`)
            .then(response => {
                setLaunchs([...launchs, ...response.data.launch]);
                setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })

        setLoadingMore(false);
        setLoading(false);
    }


    function handleFetchMoreLaunch(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        fetchRocketLaunch();
    }

    async function isRefreshSearch() {
        setIsRefreshing(true);
        await apiScraping.get(`/getLaunchs/1`)
            .then(response => {
                setLaunchs([...response.data.launch]);
                setPage(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            })
        setIsRefreshing(false);
    }

    if (loading)
        return <Load />

    return (

        <View style={{ flex: 1, backgroundColor: colors.light_gray }}>
            <ModalBottom
                texto="Informações coletadas da API https://ll.thespacedevs.com. Todos os direitos reservados."
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.containerIcon}
                    onPress={() => {
                        navigation.navigate('Home')
                    }} >
                    <Icon name='arrowleft' size={30} color={colors.gold_text} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text
                        style={styles.textHeader}
                    >
                        Próximos lançamentos
                    </Text>

                    <TouchableOpacity
                        style={styles.infoIcon}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Icon
                            name="infocirlceo"
                            size={20}
                            color={colors.gold_text}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={launchs}
                keyExtractor={item => String(item._id)}
                contentContainerStyle={{
                    padding: 10,
                }}
                renderItem={({ item }) => (
                    <CardLaunch
                        data={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                onEndReached={({ distanceFromEnd }) =>
                    handleFetchMoreLaunch(distanceFromEnd)
                }
                onEndReachedThreshold={0.6}
                ListFooterComponent={
                    loadingMore
                        ? <ActivityIndicator color={colors.gold_text} size={100} />
                        : <></>
                }
                initialNumToRender={10}
                removeClippedSubviews={true}
                maxToRenderPerBatch={10}
                updateCellsBatchingPeriod={10}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={isRefreshSearch}
                    />
                }
            />
        </View>
    );
};

export default Launchs;
