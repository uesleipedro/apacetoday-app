import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { apiScraping } from '../services/api';
import { CardLaunch } from '../components/CardLaunch';
import { Load } from '../components/Load';
import colors from '../assets/styles/colors';
import ModalBottom from '../components/ModalBottom';

export default function Lancamentos() {

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

                    <Icon
                        name="infocirlceo"
                        size={20}
                        color={colors.gold_text}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
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
                onEndReachedThreshold={0.3}
                onEndReached={({ distanceFromEnd }) =>
                    handleFetchMoreLaunch(distanceFromEnd)
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
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: colors.dark_gray,
        alignItems: 'center',
    },
    textHeader: {
        color: colors.light_text,
        fontWeight: 'bold',
        fontSize: 20
    },
    containerIcon: {
        paddingLeft: 10,
        justifyContent: 'center',
        height: '100%',
        width: '20%'
    },
    containerText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '80%',
        paddingRight: 10
    },
});
