import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Basket } from '../../data/DataTypes';
import baseAPI from './api';

type BasketWithoutId = Pick<Basket, 'courier_id' | 'status' | 'orders'>;

interface PostCartProps {
    newData: BasketWithoutId;
}

export interface IAddToCartProps
    extends UseMutationOptions<any, AxiosError, PostCartProps, unknown> {}

const postCart = async ({ newData }: PostCartProps) => {
    const response = await baseAPI.post<any>('/baskets', newData);
    return response.data;
};

const addToCart = ({ onSuccess, onError }: IAddToCartProps) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMutation<any, AxiosError, PostCartProps, unknown>({
        mutationFn: postCart,
        onSuccess: (data, variables, context) => {
            onSuccess && onSuccess(data, variables, context);
        },
        onError: (error, variables, context) => {
            onError && onError(error, variables, context);
        },
    });
export { addToCart };
