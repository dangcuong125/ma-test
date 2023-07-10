import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';
import { useQuery } from 'react-query';
import { getAllCategory, getListCategory } from '../services';

export function useGetListCategory() {
  const { data: dataListCategory, isLoading, refetch: refetchHomeConfig, isRefetching } = useQuery(
    [QUERY_KEYS.CATEGORY_LIST],
   ()=> getAllCategory(),
    {
      cacheTime: 60000,
      staleTime: 10000,
    }
  );
  return { dataListCategory, isLoading, refetchHomeConfig, isRefetching };
}