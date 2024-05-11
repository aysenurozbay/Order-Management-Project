import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../styles/commonStyles';
import { styles } from './CartScreen.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrderComponent from '../../components/OrderComponent/OrderComponent';
import CourierModal from '../../components/Courier/CourierModal';
import { paddingConsts } from '../../utils/consts';

const ListEmptyComponent = () => {
    return <Text style={styles.emptyLabel}> Cart is empty...</Text>;
};

const CartScreen = () => {
    const { orders } = useSelector((state: RootState) => state.order);

    const filteredData = orders.filter(order => order.status === 'IN_BASKET');
    const renderItem = ({ item }: any) =>
        item.status === 'IN_BASKET' ? <OrderComponent order={item} /> : null;

    const [modalVisible, setModalVisible] = useState(false);

    const handleDeliverButton = () => setModalVisible(true);

    return (
        <View style={[commonStyles.flex, { paddingTop: paddingConsts.huge }]}>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                ListEmptyComponent={<ListEmptyComponent />}
            />

            {!!filteredData?.length && (
                <TouchableOpacity style={styles.deliverButton} onPress={handleDeliverButton}>
                    <Text style={commonStyles.buttonLabel}> Yola Çıkar... </Text>
                </TouchableOpacity>
            )}

            <CourierModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                cartData={filteredData}
            />
        </View>
    );
};

export default CartScreen;
