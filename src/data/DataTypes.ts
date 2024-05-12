import { BasketStateTypes, OrderStateTypes } from '../utils/Types';

export type Courier = {
    id: string;
    name: string;
};

export type Order = {
    id: string;
    address: string;
    payment: 'Cash' | 'Credit Card';
    delivery_time: string;
    status: OrderStateTypes;
    items: {
        id: string;
        name: string;
    }[];
};

export type Basket = {
    id: string;
    courier_id: string;
    status: BasketStateTypes;
    orders: string[];
};

export type DeliveryData = {
    couriers: Courier[];
    orders: Order[];
    baskets: Basket[];
};
