import React from 'react';
import { SafeAreaView } from 'react-native';

import Tabs from './src/routes/tabs';
import GlobalStyles from './src/services/GlobalStyles';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Tabs />
    </SafeAreaView>
  );
}

export default App;