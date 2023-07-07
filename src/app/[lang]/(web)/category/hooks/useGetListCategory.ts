import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';
import { useQuery } from 'react-query';
import { getListCategory } from '../services';

export function useGetListCategory(categoryId:number) {
  const { data: dataHomeConfig, isLoading, refetch: refetchHomeConfig, isRefetching: isRefetchingHomeConfig } = useQuery(
    [QUERY_KEYS.CATEGORY_LIST],
   ()=> getListCategory(categoryId),
    {
      select: (data : any) => {
        return data?.items},
      cacheTime: 60000,
      staleTime: 10000,
    }
  );
  return { dataHomeConfig, isLoading, refetchHomeConfig, isRefetchingHomeConfig };
}
