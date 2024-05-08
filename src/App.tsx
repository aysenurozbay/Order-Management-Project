import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './components/navigation/AppNavigator';
import {commonStyles} from './components/styles/commonStyles';

const App = () => {
  return (
    <SafeAreaView style={commonStyles.flex}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
