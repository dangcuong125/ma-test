import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';
import { useQuery } from 'react-query';
import { getListCategory, getProjects } from '../services';

export function useGetNameCategory(categoryId:number) {
  const {data: dataTotalUnread, isLoading: isLoadingTotalUnread} = useQuery([QUERY_KEYS.CATEGORY_NAME], () => getProjects(categoryId), {
    cacheTime: 60000,
})
return {dataTotalUnread, isLoadingTotalUnread}
  
}
