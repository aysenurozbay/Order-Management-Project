import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './OrderComponent.styles';
import { Order } from '../../data/DataTypes';
import CartModal from '../Cart/CartModal';

interface IOrderComponentProps {
    order: Order;
}
const OrderComponent = ({ order }: IOrderComponentProps) => {
    const statusLabels = {
        ['PREPARING']: 'HAZIRLANIYOR',
        ['DELIVERED']: 'Teslim Edildi',
        ['ON_THE_WAY']: 'Yolda',
        ['CANCELLED']: 'Iptal Edildi',
    };

    const [modalVisible, setModalVisible] = useState(false);

    const handleAddtoCart = () => setModalVisible(true);
    const handleDetailsButton = () => setModalVisible(true);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {statusLabels[order.status] && (
                    <Text style={styles.statusText}> {statusLabels[order.status]} </Text>
                )}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.cartButton}
                    onPress={handleAddtoCart}>
                    <Text style={styles.cartButtonTitle}> Sepete Ekle </Text>
                </TouchableOpacity>
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
