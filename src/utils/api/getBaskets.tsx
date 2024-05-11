import { useQuery } from '@tanstack/react-query';

import baseAPI from './api';

const fetchOrders = async () => {
    const response = await baseAPI.get<any>(`/baskets`);
    return response.data;
};

const getBaskets = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, isError, data, error, status, refetch } = useQuery({
        queryKey: ['baskets'],
        queryFn: fetchOrders,
    });

    return { isLoading, isError, error, data, status, refetch };
};

export { getBaskets };
