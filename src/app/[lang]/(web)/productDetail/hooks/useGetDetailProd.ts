import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';
import { useQuery } from 'react-query';
import { getListCategory } from '../../category/services';
import { getProductDetail } from '../services';

export function useGetDetailProd(id:number) {
  const { data: data_ProductDetail, isLoading, refetch, isRefetching } = useQuery(
    [QUERY_KEYS.CATE_DETAIL, id],
   () => getProductDetail(id)
  );

  return { data_ProductDetail, isLoading, refetch, isRefetching };
}
