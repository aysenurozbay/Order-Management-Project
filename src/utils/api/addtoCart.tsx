import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';

import baseAPI from './api';
import { Basket, Courier } from '../../data/DataTypes';
import { AxiosError } from 'axios';

interface PostCartProps {
    newData: Basket;
}
export interface IAddToCartProps
    extends UseMutationOptions<any, AxiosError, PostCartProps, unknown> {}

const postCart = async ({ newData }: IAddToCartProps & PostCartProps) => {
    const response = await baseAPI.post<any>(`/baskets` + newData);
    return response.data;
};

const addtoCart = ({ onSuccess, onError }: IAddToCartProps) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMutation(({ newData }: PostCartProps) => postCart({ newData }), {
        onSuccess: (data, variables, context) => {
            onSuccess && onSuccess(data, variables, context);
        },
        onError: (error, variables, context) => {
            onError && onError(error, variables, context);
        },
        cacheTime: 0,
    });

export { addtoCart };
