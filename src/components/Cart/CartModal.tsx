import { Icon, Radio, Toast } from '@ant-design/react-native';
import { OnGroupChangeParams } from '@ant-design/react-native/lib/radio/PropsType';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Order } from '../../data/DataTypes';
import { getCourier } from '../../utils/api/getCourier';
import colors from '../../utils/colors';
import { styles } from './CarModal.styles';
import { addtoCart } from '../../utils/api/addtoCart';

interface ICartModalModalProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    order: Order;
}
type RadioValue = string | number;

const CartModal = ({ modalVisible, setModalVisible, order }: ICartModalModalProps) => {
    const handleCloseModal = () => setModalVisible(!modalVisible);

    const [selectCourier, setSelectCourier] = useState<RadioValue>();
    const [showError, setShowError] = useState<boolean>();

    const { data: courierData } = getCourier();

    const radioOnChange = (e: OnGroupChangeParams) => {
        setSelectCourier(e.target.value);
    };

    const handleAddtoCart = () => {};
    // const { mutate } = addtoCart({
    //     onSuccess: res => {
    //         Toast.success('Siparis sepete Eklendi!! ');
    //     },
    // });
    // const onSubmit = async () => mutate({});

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
                        <Text style={styles.address}>ADRES: {order.delivery_time}</Text>

                        {/* <Radio.Group onChange={radioOnChange} value={selectCourier}>
                            {courierData?.map((courier, index) => {
                                return (
                                    <Radio value={courier.id} key={index}>
                                        {courier.name}
                                    </Radio>
                                );
                            })}
                        </Radio.Group>
                        {showError && <Text> Kurye secin !!!</Text>} */}
                        <TouchableOpacity
                            style={styles.assignCourier}
                            activeOpacity={0.5}
                            onPress={handleAddtoCart}>
                            <Text>Sepete Ekle </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CartModal;
