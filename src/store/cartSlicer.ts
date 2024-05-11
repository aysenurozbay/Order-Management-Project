import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Order } from '../data/DataTypes';

export interface CartSliceState {
    cartOrders: Order[];
    // courier: Courier;
}

const initialState: CartSliceState = {
    cartOrders: [],
    // courier: { name: '', id: '' },
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<{ order: Order }>) => {
            const newItem = { ...action.payload.order, status: 'IN_BASKET' };
            state.cartOrders.push(newItem);
        },
    },
});

export const { addCartItem } = cartSlice.actions;
