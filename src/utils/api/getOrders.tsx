import { UseMutationOptions, useQuery } from '@tanstack/react-query';

import baseAPI from './api';
import { AxiosError } from 'axios';
import { Order } from '../../data/DataTypes';

type OnErrorType = AxiosError;
type OnSuccessType = any;
type ContextType = any;

type VariableType = {
    ids?: string[];
};
export interface IFetchOrdersProps
    extends UseMutationOptions<OnSuccessType, OnErrorType, VariableType, ContextType> {
    ids?: string[];
}
const fetchOrders = async ({ ids }: IFetchOrdersProps) => {
    let url = '/orders';
    if (ids) {
        url += `?id=${ids?.join('&id=')}`;
    }
    const response = await baseAPI.get<Order[]>(url);

    return response.data;
};

const getOrders = (ids?: string[]) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, isError, data, error, status, refetch } = useQuery({
        queryKey: ['orders', ids],
        queryFn: () => fetchOrders({ ids }),
    });

    return { isLoading, isError, error, data, status, refetch };
};

export { getOrders };
