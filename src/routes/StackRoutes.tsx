import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();

import ArtigoScreen from '../screens/ArtigoViewScreen';

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator>
        <stackRoutes.Screen
            name='ArtigoScreen'
            component={ArtigoScreen}
        />
    </stackRoutes.Navigator>
);

export default AppRoutes;
