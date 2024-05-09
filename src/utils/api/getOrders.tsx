import { useQuery } from '@tanstack/react-query';

import baseAPI from './api';

const fetchOrders = async () => {
    const response = await baseAPI.get<any>(`/orders`);
    return response.data;
};

const getOrders = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, isError, data, error, status, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: fetchOrders,
    });

    return { isLoading, isError, error, data, status };
};

export { getOrders };
