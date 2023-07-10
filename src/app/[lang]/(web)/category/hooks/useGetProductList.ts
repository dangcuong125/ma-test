import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';
import { useQuery } from 'react-query';
import { getListCategory } from '../services';

export function useGetProductList(categoryId:number) {
  const {data: dataListProd, isLoading: isLoadingListProd} = useQuery([QUERY_KEYS.CATEGORY_LIST], () => getListCategory(categoryId), {
    cacheTime: 60000,
})
return {dataListProd, isLoadingListProd}
  
}
