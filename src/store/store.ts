import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlicer';
import { orderSlice } from './orderSlicer';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        order: orderSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export type AppDispatch = typeof store.dispatch;
