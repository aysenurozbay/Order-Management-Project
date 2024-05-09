import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { commonStyles } from './styles/commonStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={commonStyles.flex}>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </QueryClientProvider>
    );
};

export default App;
