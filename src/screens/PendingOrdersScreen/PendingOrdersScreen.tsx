import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import OrderComponent from '../../components/OrderComponent/OrderComponent';
import { commonStyles } from '../../styles/commonStyles';
import { getOrders } from '../../utils/api/getOrders';
import { setOrders } from '../../store/orderSlicer';
import { RootState } from '../../store/store';

const PendingOrdersScreen = () => {
    const { data, isLoading, isError } = getOrders();

    const dispatch = useDispatch();
    const { orders } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        dispatch(setOrders(data));
    }, [data, dispatch]);

    const renderItem = ({ item }: any) => {
        return item.status === 'PREPARING' ? <OrderComponent order={item} /> : null;
    };

    return (
        <View style={commonStyles.flex}>
            {isLoading && <Text> LOADING...</Text>}
            {isError && <Text> Bir Hata Olustu Daha Sonra Tekrar Deneyiniz ...</Text>}
            {orders && (
                <FlatList data={orders} renderItem={renderItem} keyExtractor={item => item.id} />
            )}
        </View>
    );
};

export default PendingOrdersScreen;
