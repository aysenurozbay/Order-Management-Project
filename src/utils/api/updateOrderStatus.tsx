import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import baseAPI from './api';
import { Order } from '../../data/DataTypes';

interface PostCartProps {
    order: Order;
}

export interface IAddToCartProps
    extends UseMutationOptions<any, AxiosError, PostCartProps, unknown> {}

const postStatus = async ({ order }: PostCartProps) => {
    const response = await baseAPI.put<any>(`/orders/${order.id}`, { ...order });
    return response.data;
};

const updateOrderStatus = ({ onSuccess, onError }: IAddToCartProps) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMutation<any, AxiosError, PostCartProps, unknown>({
        mutationFn: postStatus,
        onSuccess: (data, variables, context) => {
            onSuccess && onSuccess(data, variables, context);
        },
        onError: (error, variables, context) => {
            onError && onError(error, variables, context);
        },
    });
export { updateOrderStatus };
