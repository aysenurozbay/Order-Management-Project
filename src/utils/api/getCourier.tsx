import { UseMutationOptions, useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import baseAPI from './api';

type OnErrorType = AxiosError;
type OnSuccessType = any;
type ContextType = any;

type VariableType = {
    id?: string;
};
export interface IGetCourierProps
    extends UseMutationOptions<OnSuccessType, OnErrorType, VariableType, ContextType> {
    id?: string;
}
const fetchCourier = async ({ id }: IGetCourierProps) => {
    const url = id ? `/couriers/${id}` : '/couriers';
    const response = await baseAPI.get<any>(url);
    return response.data;
};

const getCourier = (id?: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, isError, data, error, status, refetch } = useQuery({
        queryKey: ['couriers', id],
        queryFn: () => fetchCourier({ id }),
    });

    return { isLoading, isError, error, data, status, refetch };
};
export { getCourier };
