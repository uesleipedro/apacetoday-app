import React from 'react';
import { SafeAreaView } from 'react-native';

import TabNavigation from './src/routes/TabNavigation';
import GlobalStyles from './src/services/GlobalStyles';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <TabNavigation />
    </SafeAreaView>
  );
}

export default App;