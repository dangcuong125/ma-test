import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';
import { useQuery } from 'react-query';
import { getListCategory } from '../../category/services';
import { getProductDetail } from '../services';

export function useGetDetailProd(id:number) {
  const { data, isLoading, refetch, isRefetching } = useQuery(
    [QUERY_KEYS.CATE_DETAIL],
   () => getProductDetail(id)
  );
  const dataTest = getProductDetail(id)
  return { dataTest, isLoading, refetch, isRefetching };
}
