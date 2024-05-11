import { Icon } from '@ant-design/react-native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Basket, Order } from '../../data/DataTypes';
import { orderSlice, setBasketItems, updateBasketOrderStatus } from '../../store/orderSlicer';
import { RootState } from '../../store/store';
import { commonStyles } from '../../styles/commonStyles';
import { getBaskets } from '../../utils/api/getBaskets';
import { getCourier } from '../../utils/api/getCourier';
import { getOrders } from '../../utils/api/getOrders';
import { updateBasketStatus } from '../../utils/api/updateBasketStatus';
import { updateOrderStatus } from '../../utils/api/updateOrderStatus';
import colors from '../../utils/colors';
import { styles } from './BasketComponent.styles';

interface IOrderComponentProps {
    basketItem: Basket;
}

const BasketComponent = ({ basketItem }: IOrderComponentProps) => {
    const statusLabels = {
        ['PREPARING']: 'Hazırlanıyor',
        ['DELIVERED']: 'Teslim Edildi',
        ['ON_THE_WAY']: 'Yolda',
        ['CANCELLED']: 'İptal Edildi',
        ['DONE']: 'Tamamlandi',
    };
    const dispatch = useDispatch();

    const { data: courier } = getCourier(basketItem.courier_id);
    const { data: orderItems, refetch: refetchOrders } = getOrders(basketItem.orders);
    const { refetch: refetchBaskets } = getBaskets();

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const { mutate: mutateOrder } = updateOrderStatus({
        onSuccess: data => {
            dispatch(updateBasketOrderStatus({ orderItem: data }));
            refetchOrders();
        },
    });

    const { basketItems } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        dispatch(setBasketItems(orderItems));
    }, [orderItems, dispatch]);

    const handleDelivery = (
        orderStatus: 'PREPARING' | 'DELIVERED' | 'ON_THE_WAY' | 'CANCELLED' | 'IN_BASKET',
        food: Order,
    ) => {
        const order = { ...food, status: orderStatus };
        mutateOrder({ order });
    };

    const checkAndUpdateBasketStatus = () =>
        !orderItems?.some(order => order.status !== 'DELIVERED' && order.status !== 'CANCELLED');

    const { mutate: mutateBasket } = updateBasketStatus({
        onSuccess: () => {
            refetchBaskets();
        },
    });

    const handleFinishBasket = () => {
        const updatedBasket: Basket = { ...basketItem, status: 'DONE' };
        mutateBasket({ basket: updatedBasket });
    };

    return (
        <TouchableOpacity style={styles.container} onPress={toggleExpand}>
            <View style={styles.headerContainer}>
                {statusLabels[basketItem.status] && (
                    <Text style={styles.statusText}>
                        # {basketItem.id} - {statusLabels[basketItem?.status]}
                    </Text>
                )}
            </View>
            <Text> {courier?.name}</Text>

            {isExpanded && (
                <View style={styles.detailContainer}>
                    {basketItems?.map((food, index) => {
                        return (
                            <View style={styles.itemDetailsContainer} key={index}>
                                <View style={styles.headerContainer}>
                                    <View>
                                        {food.items?.map((item, index) => {
                                            return (
                                                <View style={styles.foodNameContainer} key={index}>
                                                    <Text style={styles.foodName}>{index + 1}</Text>
                                                    <Text style={styles.foodName}>{item.name}</Text>
                                                </View>
                                            );
                                        })}
                                        <Text style={styles.address}> {food.address}</Text>
                                        <Text style={styles.address}> {food.status}</Text>
                                    </View>
                                    {food.status === 'DELIVERED' && (
                                        <Icon
                                            name="check-square"
                                            size={'md'}
                                            color={colors.green}
                                        />
                                    )}
                                    {food.status === 'CANCELLED' && (
                                        <Icon
                                            name="close-square"
                                            size={'md'}
                                            color={colors.errorPrimary}
                                        />
                                    )}
                                </View>

                                {food.status === 'PREPARING' && (
                                    <View style={styles.deliveryButtonContainer}>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => handleDelivery('DELIVERED', food)}
                                            style={styles.statusButton}>
                                            <Icon
                                                name="check-square"
                                                size={'md'}
                                                color={colors.green}
                                            />
                                            <Text style={styles.buttonLabel}> Teslim Edildi</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => handleDelivery('CANCELLED', food)}
                                            style={styles.statusButton}>
                                            <Icon
                                                name="close-square"
                                                size={'md'}
                                                color={colors.errorPrimary}
                                            />
                                            <Text style={styles.buttonLabel}> Teslim Edildi</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        );
                    })}
                </View>
            )}
            {basketItem.status === 'ON_THE_WAY' && checkAndUpdateBasketStatus() && (
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={handleFinishBasket}
                    style={commonStyles.button}>
                    <Text style={commonStyles.buttonLabel}> Siparisi Tamamla </Text>
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
};

export default BasketComponent;
