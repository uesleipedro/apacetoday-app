import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export const Stack = createStackNavigator();

import Home from '../../screens/Home';
import News from '../../screens/News';
import NewsView from '../../screens/NewsView';
import AboutAuthor from '../../screens/AboutAuthor';
import Launchs from '../../screens/Launchs';
import LaunchDetail from '../../screens/LaunchDetail';
import SpaceTodayTv from '../../screens/SpaceTodayTv';

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

export default HomeStackScreen;