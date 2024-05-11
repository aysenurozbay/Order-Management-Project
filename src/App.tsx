import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import { store } from './store/store';
import { commonStyles } from './styles/commonStyles';

const queryClient = new QueryClient();

const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ImageBackground source={require('./assets/images/bg.png')} style={styles.image}>
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

const styles = StyleSheet.create({
    image: { flex: 1 },
});
