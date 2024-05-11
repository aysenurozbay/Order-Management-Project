import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import { store } from './store/store';
import { commonStyles } from './styles/commonStyles';
import BackgroundIcon from './assets/icons/BackgroundIcon';

const queryClient = new QueryClient();

const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ImageBackground source={require('./assets/images/bg.png')} style={{ flex: 1 }}>
                    <SafeAreaView style={commonStyles.flex}>
                        <NavigationContainer>
                            <AppNavigator />
                        </NavigationContainer>
                    </SafeAreaView>
                </ImageBackground>
            </QueryClientProvider>
        </Provider>
    );
};

export default App;
