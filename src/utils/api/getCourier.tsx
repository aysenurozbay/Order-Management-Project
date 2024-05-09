import { useQuery } from '@tanstack/react-query';

import baseAPI from './api';
import { Courier } from '../../data/DataTypes';

const fetchCourier = async () => {
    const response = await baseAPI.get<Courier[]>(`/couriers`);
    return response.data;
};

const getCourier = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, isError, data, error, status, refetch } = useQuery({
        queryKey: ['couriers'],
        queryFn: fetchCourier,
    });

    return { isLoading, isError, error, data, status, refetch };
};

export { getCourier };
