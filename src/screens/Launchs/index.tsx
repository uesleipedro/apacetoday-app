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

import { api } from '../../services/api';
import { Load } from '../../components/Load';
import CardLaunch from './CardLaunch';
import ModalBottom from '../../components/ModalBottom';
import colors from '../../assets/styles/colors';
import styles from './styles/LaunchsStyles';

const Launchs = () => {
    const [launchs, setLaunchs] = useState<any>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loadingAnimation, setLoadingAnimation] = useState(false);
    const [pageOpeningAnimation, setPageOpeningAnimation] = useState(true);
    const [showModalInformation, setShowModalInformation] = useState<boolean>(false);

    const navigation = useNavigation<any>();

    useEffect(() => {
        fetchRocketLaunch();
    }, []);

    const handleFetchNextPage = () => {
        fetchRocketLaunch();
    }

    const fetchRocketLaunch = () => {
        setLoadingAnimation(true);

        api.get(`getLaunchs/${pageNumber}`)
            .then(response => {
                setLaunchs([...launchs, ...response.data.launch]);
                setPageNumber(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            });

        setLoadingAnimation(false);
        setPageOpeningAnimation(false);
    }

    const handleRefreshScreen = async () => {
        await api.get(`getLaunchs/1`)
            .then(response => {
                setLaunchs([...response.data.launch]);
                setPageNumber(oldValue => oldValue + 1);
            })
            .catch(function (error) {
                console.error(error.message);
            });
    }

    if (pageOpeningAnimation)
        return <Load />

    return (
        <View style={{ flex: 1, backgroundColor: colors.light_gray }}>
            <ModalBottom
                texto="Informações coletadas da API https://ll.thespacedevs.com. Todos os direitos reservados."
                modalVisible={showModalInformation}
                setModalVisible={setShowModalInformation}
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
                        onPress={() => setShowModalInformation(!showModalInformation)}
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
                onEndReachedThreshold={0.3}
                onEndReached={({ distanceFromEnd }) =>
                    distanceFromEnd > 1 && handleFetchNextPage()
                }
                ListFooterComponent={
                    loadingAnimation
                        ? <ActivityIndicator color={colors.gold_text} size={60} />
                        : <></>
                }
                initialNumToRender={10}
                removeClippedSubviews={true}
                maxToRenderPerBatch={10}
                updateCellsBatchingPeriod={10}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={handleRefreshScreen}
                    />
                }
            />
        </View>
    );
};

export default Launchs;
