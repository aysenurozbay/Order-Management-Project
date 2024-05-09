import React from 'react';
import { FlatList, Text, View } from 'react-native';
import OrderComponent from '../../components/OrderComponent/OrderComponent';
import { getOrders } from '../../utils/api/getOrders';
import { commonStyles } from '../../styles/commonStyles';

const PendingOrdersScreen = () => {
    const { data, isLoading, isError } = getOrders();

    return (
        <View style={commonStyles.flex}>
            {isLoading && <Text> LOADING...</Text>}
            {isError && <Text> Bir Hata Olustu Daha Sonra Tekrar Deneyiniz ...</Text>}
            <FlatList
                data={data}
                renderItem={({ item }) => <OrderComponent order={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default PendingOrdersScreen;
