import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;

import colors from '../assets/styles/colors';
import TabItem from '../components/TabItem';
import Images from '../assets';
import Home from '../screens/Home';
import Artigo from '../screens/ArticlesList';
import PodCast from '../screens/PodCasts';
import Store from '../screens/Store';
import Videos from '../screens/Videos';
import ArticleView from '../screens/ArticleView';
import PodCastView from '../screens/PodCastView';
import News from '../screens/News';
import NewsView from '../screens/NewsView';
import AboutAuthor from '../screens/AboutAuthor';
import Launchs from '../screens/Launchs';
import LaunchDetail from '../screens/LaunchDetail';
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
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="NewsView" component={NewsView} />
        <Stack.Screen name="AboutAuthor" component={AboutAuthor} />
        <Stack.Screen name="Launchs" component={Launchs} />
        <Stack.Screen name="LaunchDetail" component={LaunchDetail} />
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
        <Stack.Screen name="PodCastViewScreen" component={PodCastView} />
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
        <Stack.Screen name="Video" component={Videos} />
    </Stack.Navigator>
);

const ArtigoStackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Artigo" component={Artigo} />
        <Stack.Screen name="ArticleView" component={ArticleView} />
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
                        <TabItem
                            focused={focused}
                            name='PodCast'
                            img={Images.headset}
                        />
                    ),
                }} />
                <Tab.Screen name='Store' component={StoreStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            focused={focused}
                            name='Store'
                            img={Images.cartShop}
                        />

                    ),
                }} />
                <Tab.Screen name='Inicial' component={HomeStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            focused={focused}
                            name='Home'
                            img={Images.rocket}
                        />
                    ),
                }} />
                <Tab.Screen name='Vídeos' component={VideoStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            focused={focused}
                            name='Vídeos'
                            img={Images.video}

                        />
                    ),
                }} />
                <Tab.Screen name='Artigos' component={ArtigoStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabItem
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

export default Tabs;