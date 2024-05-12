import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import BasketComponent from '../../components/OrderComponent/BasketComponent';

import { commonStyles } from '../../styles/commonStyles';

import { setBasket } from '../../store/orderSlicer';
import { RootState } from '../../store/store';

import { getBaskets } from '../../utils/api/getBaskets';
import { basketStates, paddingConsts } from '../../utils/consts';

const BasketHistoryScreen = () => {
    const { data, isLoading, isError } = getBaskets();

    const dispatch = useDispatch();
    const { baskets } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        dispatch(setBasket(data));
    }, [data, dispatch]);

    const renderItem = ({ item }: any) =>
        item.status === basketStates.DONE ? <BasketComponent basketItem={item} /> : null;

    return (
        <View style={[commonStyles.flex, { paddingTop: paddingConsts.huge }]}>
            {isLoading && <Text> LOADING...</Text>}
            {isError && <Text> Bir Hata Olustu Daha Sonra Tekrar Deneyiniz ...</Text>}
            <FlatList data={baskets} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    );
};

export default BasketHistoryScreen;
