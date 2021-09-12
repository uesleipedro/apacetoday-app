import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
    </Stack.Navigator>
)
const PodCastStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="PodCast" component={PodCast} />
        <Stack.Screen name="PodCastViewScreen" component={PodCastViewScreen} />
    </Stack.Navigator>
)
const StoreStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
)
const VideoStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Video" component={Video} />
    </Stack.Navigator>
)

const ArtigoStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Artigo" component={Artigo} />
        <Stack.Screen name="ArtigoView" component={ArtigoView} />
    </Stack.Navigator>
)

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Inicial'
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        height: 60,
                        backgroundColor: '#FFF'
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
    modalView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Tabs;