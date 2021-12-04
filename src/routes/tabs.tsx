import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;

import colors from '../assets/styles/colors';
import Icones from '../components/PrimaryIcons';
import Images from '../assets';
import Home from '../screens/HomeScreen';
import Artigo from '../screens/ArtigoScreen';
import PodCast from '../screens/PodCastScreen';
import Store from '../screens/StoreScreen';
import Video from '../screens/VideosScreen';
import ArtigoView from '../screens/ArtigoViewScreen';
import PodCastViewScreen from '../screens/PodCastViewScreen';
import NewsList from '../components/NewsList';
import NewsView from '../screens/NewsViewScreen';
import Author from '../screens/Author';
import Lancamentos from '../screens/Lancamentos';
import LancamentoDetalhe from '../screens/LancamentoDetalhe';
import SpaceTodayTv from '../screens/SpaceTodayTv';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="NewsView" component={NewsView} />
        <Stack.Screen name="Author" component={Author} />
        <Stack.Screen name="Lancamentos" component={Lancamentos} />
        <Stack.Screen name="LancamentoDetalhe" component={LancamentoDetalhe} />
        <Stack.Screen name="SpaceTodayTv" component={SpaceTodayTv} />
    </Stack.Navigator>
);

const PodCastStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="PodCast" component={PodCast} />
        <Stack.Screen name="PodCastViewScreen" component={PodCastViewScreen} />
    </Stack.Navigator>
);

const StoreStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
);

const VideoStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Video" component={Video} />
    </Stack.Navigator>
);

const ArtigoStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Artigo" component={Artigo} />
        <Stack.Screen name="ArtigoView" component={ArtigoView} />
    </Stack.Navigator>
);

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Inicial'
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        height: windowHeight * 0.08,
                        backgroundColor: colors.dark_gray,
                        borderTopWidth: 0,
                        paddingTop: 2
                    }
                }}
            >
                <Tab.Screen name='PodCast' component={PodCastStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icones
                            focused={focused}
                            name='PodCast'
                            img={Images.headset}
                        />
                    ),
                }} />
                <Tab.Screen name='Store' component={StoreStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icones
                            focused={focused}
                            name='Store'
                            img={Images.cartShop}
                        />

                    ),
                }} />
                <Tab.Screen name='Inicial' component={HomeStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icones
                            focused={focused}
                            name='Home'
                            img={Images.rocket}
                        />
                    ),
                }} />
                <Tab.Screen name='Vídeos' component={VideoStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icones
                            focused={focused}
                            name='Vídeos'
                            img={Images.video}

                        />
                    ),
                }} />
                <Tab.Screen name='Artigos' component={ArtigoStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icones
                            focused={focused}
                            name='Artigos'
                            img={Images.article}
                        />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

});

export default Tabs;