import { Icon, Radio } from '@ant-design/react-native';
import { OnGroupChangeParams } from '@ant-design/react-native/lib/radio/PropsType';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Order } from '../../data/DataTypes';
import { orderSlice } from '../../store/orderSlicer';
import { commonStyles } from '../../styles/commonStyles';
import { addToCart } from '../../utils/api/addtoCart';
import { getBaskets } from '../../utils/api/getBaskets';
import { getCourier } from '../../utils/api/getCourier';
import colors from '../../utils/colors';
import { styles } from './CourierModal.styles';

interface ICartModalModalProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    cartData: Order[];
}
type RadioValue = string | number;

const CourierModal = ({ modalVisible, setModalVisible, cartData }: ICartModalModalProps) => {
    const [selectCourier, setSelectCourier] = useState<RadioValue>();
    const [showError, setShowError] = useState<boolean>();

    const handleCloseModal = () => {
        setModalVisible(!modalVisible);
        setShowError(false);
    };

    const dispatch = useDispatch();

    const { refetch } = getBaskets();

    const { data: courierData } = getCourier();

    const radioOnChange = (e: OnGroupChangeParams) => {
        setSelectCourier(e.target.value);
    };

    const { mutate } = addToCart({
        onSuccess: () => {
            dispatch(orderSlice.actions.updateCartItemStatus({ order: cartData }));
            setModalVisible(!modalVisible);
            setShowError(false);
            refetch();
        },
    });

    const handleAddtoCart = () => {
        if (!selectCourier) {
            setShowError(true);
        } else {
            setShowError(false);
            const orderIds: string[] = cartData.map(order => order.id);
            const newData = {
                courier_id: selectCourier.toString(),
                status: 'ON_THE_WAY',
                orders: orderIds,
            };
            mutate({ newData });
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.closeIcon}
                            activeOpacity={0.5}
                            onPress={handleCloseModal}>
                            <Icon name="close" size="md" color={colors.errorPrimary} />
                        </TouchableOpacity>
                        <Radio.Group onChange={radioOnChange} value={selectCourier}>
                            {courierData?.map((courier, index) => {
                                return (
                                    <Radio value={courier.id} key={index}>
                                        {courier.name}
                                    </Radio>
                                );
                            })}
                        </Radio.Group>
                        {showError && <Text style={styles.errorText}> Kurye secin !!!</Text>}
                        <TouchableOpacity
                            style={styles.assignCourier}
                            activeOpacity={0.5}
                            onPress={handleAddtoCart}>
                            <Text style={commonStyles.buttonLabel}>Gonder </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CourierModal;
