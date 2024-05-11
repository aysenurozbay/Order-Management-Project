import { Icon } from '@ant-design/react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Basket, Order } from '../../data/DataTypes';
import { orderSlice } from '../../store/orderSlicer';
import { getCourier } from '../../utils/api/getCourier';
import { getOrders } from '../../utils/api/getOrders';
import { updateOrderStatus } from '../../utils/api/updateOrderStatus';
import colors from '../../utils/colors';
import { styles } from './BasketComponent.styles';

interface IOrderComponentProps {
    order: Basket;
}

const BasketComponent = ({ order }: IOrderComponentProps) => {
    const statusLabels = {
        ['PREPARING']: 'Hazırlanıyor',
        ['DELIVERED']: 'Teslim Edildi',
        ['ON_THE_WAY']: 'Yolda',
        ['CANCELLED']: 'İptal Edildi',
    };
    const dispatch = useDispatch();

    const { data: courier } = getCourier(order.courier_id);
    const { data: orderItems, refetch, isLoading, status } = getOrders(order.orders);

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const { mutate } = updateOrderStatus({
        onSuccess: res => {
            console.log(`SUCCESS`, res);
            dispatch(orderSlice.actions.updateStatus({ order }));

            // Toast.success('Sipariş sepete eklendi!!');
        },
        onError: error => {
            console.log(`onError`, error);

            // Toast.error('Sipariş sepete eklenirken bir hata oluştu: ' + error.message);
        },
    });

    const handleDelivery = (
        orderStatus: 'PREPARING' | 'DELIVERED' | 'ON_THE_WAY' | 'CANCELLED' | 'IN_BASKET',
        food: Order,
    ) => {
        const order = { ...food, status: orderStatus };
        mutate({ order });
        // refetch();
    };

    const tekara = () => {
        refetch();
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {statusLabels[order.status] && (
                    <Text style={styles.statusText}> {statusLabels[order.status]} </Text>
                )}
            </View>
            <Text> {courier?.name}</Text>

            {/* {isExpanded && ( */}
            <View style={styles.detailContainer}>
                {orderItems?.map((food, index) => {
                    console.log(food.items);

                    return (
                        <View style={styles.itemDetailsContainer} key={index}>
                            <View>
                                {food.items?.map((item, index) => {
                                    return (
                                        <View style={styles.foodNameContainer} key={index}>
                                            <Text style={styles.foodName}> {index + 1}</Text>
                                            <Text style={styles.foodName}> {item.name}</Text>
                                        </View>
                                    );
                                })}
                                <Text style={styles.address}> {food.address}</Text>
                            </View>

                            {food.status === 'DELIVERED' && (
                                <Icon name="check-square" size={'md'} color={colors.green} />
                            )}

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
        </View>
    );
};

export default BasketComponent;
