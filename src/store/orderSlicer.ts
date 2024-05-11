import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Basket, Order } from '../data/DataTypes';

export interface OrderSliceState {
    orders: Order[];
    baskets: Basket[];
    loading: boolean;
    error: boolean;
}

const initialState: OrderSliceState = {
    orders: [],
    baskets: [],
    loading: false,
    error: false,
};

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders(state, action) {
            state.orders = action.payload;
        },
        setBasket(state, action) {
            state.baskets = action.payload;
        },
        addCartItem: (state, action) => {
            const newOrder = { ...action.payload.order, status: 'IN_BASKET' };
            const _orders = state.orders.map(order =>
                order.id === action.payload.order.id ? newOrder : order,
            );
            state.orders = _orders;
        },
        removeCartItem: (state, action) => {
            const newOrder = { ...action.payload.order, status: 'PREPARING' };
            const _orders = state.orders.map(order =>
                order.id === action.payload.order.id ? newOrder : order,
            );
            state.orders = _orders;
        },
        updateStatus: (state, action: PayloadAction<{ order: Order[] }>) => {
            const cartData = action.payload.order;
            const updatedOrders = state.orders.map(order => {
                if (cartData.some(cartOrder => cartOrder.id === order.id)) {
                    const status: 'ON_THE_WAY' = 'ON_THE_WAY';
                    return { ...order, status: status };
                }
                return order;
            });
            state.orders = updatedOrders;
        },

        clearCart: (state, action) => {},
    },
});

export const { setOrders, addCartItem, removeCartItem, setBasket, updateStatus } =
    orderSlice.actions;

export const selectNumberOfItem = (state: any) =>
    state.order.orders?.filter((_order: any) => _order.status === 'IN_BASKET').length;
