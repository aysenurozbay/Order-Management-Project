import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BasketComponent from '../../components/OrderComponent/BasketComponent';
import { setBasket } from '../../store/orderSlicer';
import { RootState } from '../../store/store';
import { commonStyles } from '../../styles/commonStyles';
import { getBaskets } from '../../utils/api/getBaskets';
import { orderStates } from '../../utils/consts';

const PendingOrdersScreen = () => {
    const { data, isLoading, isError } = getBaskets();

    const dispatch = useDispatch();
    const { baskets } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        dispatch(setBasket(data));
    }, [data, dispatch]);

    const renderItem = ({ item }: any) =>
        item.status === orderStates['ON_THE_WAY'] ? <BasketComponent basketItem={item} /> : null;

    return (
        <View style={commonStyles.flex}>
            {isLoading && <Text> LOADING...</Text>}
            {isError && <Text> Bir Hata Olustu Daha Sonra Tekrar Deneyiniz ...</Text>}
            <FlatList data={baskets} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    );
};

export default PendingOrdersScreen;
