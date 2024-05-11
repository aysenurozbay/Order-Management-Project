import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Basket } from '../../data/DataTypes';
import baseAPI from './api';

interface PostCartProps {
    basket: Basket;
}

export interface IAddToCartProps
    extends UseMutationOptions<any, AxiosError, PostCartProps, unknown> {}

const postStatus = async ({ basket }: PostCartProps) => {
    const response = await baseAPI.put<any>(`/baskets/${basket.id}`, { ...basket });
    return response.data;
};

const updateBasketStatus = ({ onSuccess, onError }: IAddToCartProps) =>
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
export { updateBasketStatus };
