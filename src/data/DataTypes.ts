export type Courier = {
    id: string;
    name: string;
};

export type Order = {
    id: string;
    address: string;
    payment: 'Cash' | 'Credit Card';
    delivery_time: string;
    status: 'PREPARING' | 'DELIVERED' | 'ON_THE_WAY' | 'CANCELLED';
    items: {
        id: string;
        name: string;
    }[];
};

export type Basket = {
    id: string;
    courier_id: string;
    status: 'ON_THE_WAY' | 'DELIVERED';
    orders: string[];
};

export type DeliveryData = {
    couriers: Courier[];
    orders: Order[];
    baskets: Basket[];
};