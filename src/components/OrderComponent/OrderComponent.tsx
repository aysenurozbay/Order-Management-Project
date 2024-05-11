import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Order } from '../../data/DataTypes';
import { orderSlice } from '../../store/orderSlicer';
import CartModal from '../Cart/CartModal';
import { styles } from './OrderComponent.styles';

interface IOrderComponentProps {
    order: Order;
}
const OrderComponent = ({ order }: IOrderComponentProps) => {
    const statusLabels = {
        ['PREPARING']: 'Hazirlaniyor',
        ['DELIVERED']: 'Teslim Edildi',
        ['ON_THE_WAY']: 'Yolda',
        ['CANCELLED']: 'Iptal Edildi',
        ['IN_BASKET']: 'Sepette',
    };

    const [modalVisible, setModalVisible] = useState(false);

    const handleDetailsButton = () => setModalVisible(true);

    // const cartOrder = useSelector(state => state.cart.cartOrders);
    const dispatch = useDispatch();

    const handleAddtoCart = () => {
        //dispatch(orderSlice.actions.removeFromOrders({ order }));
        dispatch(orderSlice.actions.addCartItem({ order }));
    };
    const handleRemoveFromCart = () => {
        //dispatch(orderSlice.actions.removeFromOrders({ order }));
        dispatch(orderSlice.actions.removeCartItem({ order }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {statusLabels[order.status] && (
                    <Text style={styles.statusText}> {statusLabels[order.status]} </Text>
                )}

                {order.status === 'PREPARING' && (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.cartButton}
                        onPress={handleAddtoCart}>
                        <Text style={styles.cartButtonTitle}> Sepete Ekle </Text>
                    </TouchableOpacity>
                )}
                {order.status === 'IN_BASKET' && (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.cartButton}
                        onPress={handleRemoveFromCart}>
                        <Text style={styles.cartButtonTitle}> Sepetten Cikar </Text>
                    </TouchableOpacity>
                )}
            </View>

            {order.items.map((food, index) => {
                return (
                    <View style={styles.foodNameContainer} key={index}>
                        <Text style={styles.foodName}> {index + 1}</Text>
                        <Text style={styles.foodName}> {food.name}</Text>
                    </View>
                );
            })}
            <Text style={styles.address}>ADRES: {order.address}</Text>
            <TouchableOpacity onPress={handleDetailsButton}>
                <Text style={styles.detailText}>Detaylar</Text>
            </TouchableOpacity>
            <CartModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                order={order}
            />
        </View>
    );
};

export default OrderComponent;
