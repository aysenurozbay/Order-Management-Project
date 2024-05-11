import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Basket, Order } from '../data/DataTypes';

export interface OrderSliceState {
    orders: Order[];
    baskets: Basket[];
    basketItems: Order[];
    loading: boolean;
    error: boolean;
}

const initialState: OrderSliceState = {
    orders: [],
    baskets: [],
    basketItems: [],
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
        setBasketItems(state, action) {
            state.basketItems = action.payload;
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
        updateOrderStatus: (state, action) => {
            const newOrder = { ...action.payload.order, status: 'PREPARING' };
            const _orders = state.orders.map(order =>
                order.id === action.payload.order.id ? newOrder : order,
            );
            state.orders = _orders;
        },
        updateBasketOrderStatus: (state, action: PayloadAction<{ orderItem: Order }>) => {
            const newOrder = action.payload.orderItem;

            const _orders = state.basketItems.map(order =>
                order.id === newOrder.id ? newOrder : order,
            );
            state.basketItems = _orders;
        },
        updateCartItemStatus: (state, action: PayloadAction<{ order: Order[] }>) => {
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
    },
});

export const {
    setOrders,
    addCartItem,
    removeCartItem,
    setBasket,
    setBasketItems,
    updateOrderStatus,
    updateCartItemStatus,
    updateBasketOrderStatus,
} = orderSlice.actions;

export const selectNumberOfItem = (state: any) =>
    state.order.orders?.filter((_order: any) => _order.status === 'IN_BASKET').length;
