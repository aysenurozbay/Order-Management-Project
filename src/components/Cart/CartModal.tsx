import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@ant-design/react-native';

import { Order } from '../../data/DataTypes';
import colors from '../../utils/colors';
import { styles } from './CarModal.styles';

interface ICartModalModalProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    order: Order;
}

const CartModal = ({ modalVisible, setModalVisible, order }: ICartModalModalProps) => {
    const handleCloseModal = () => setModalVisible(!modalVisible);

    const { delivery_time } = order;

    const date = new Date(delivery_time);
    const formattedDate = date.toLocaleString();

    const paymentLookUp = {
        ['Cash']: 'Nakit',
        ['Credit Card']: 'Kredi Karti',
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.closeIcon}
                            activeOpacity={0.5}
                            onPress={handleCloseModal}>
                            <Icon name="close" size="md" color={colors.errorPrimary} />
                        </TouchableOpacity>
                        {order.items.map((food, index) => {
                            return (
                                <View style={styles.foodNameContainer} key={index}>
                                    <Text style={styles.foodName}> {index + 1}</Text>
                                    <Text style={styles.foodName}> {food.name}</Text>
                                </View>
                            );
                        })}
                        <Text style={styles.address}>ADRES: {order.address}</Text>
                        <Text style={styles.address}>SIPARIS ZAMANI: {formattedDate}</Text>
                        <Text style={styles.address}>
                            ODEME TIPI: {paymentLookUp[order.payment]}
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CartModal;
