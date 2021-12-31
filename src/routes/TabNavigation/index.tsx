import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;

import colors from '../../assets/styles/colors';
import TabItem from '../TabItem';
import Images from '../../assets';
import Articles from '../../screens/Articles';
import PodCast from '../../screens/PodCasts';
import Store from '../../screens/Store';
import Videos from '../../screens/Videos';
import ArticleView from '../../screens/ArticleView';
import PodCastView from '../../screens/PodCastView';
import HomeStackScreen, { Stack } from '../HomeStackScreen';

const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="Artigo" component={Articles} />
        <Stack.Screen name="ArticleView" component={ArticleView} />
    </Stack.Navigator>
);

const TabNavigation = () => {
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

export default TabNavigation;