import { useInfiniteQuery } from 'react-query';
import { INotiList, IParamsNotiList } from '../../noti-common/interface';
import { getNotiList } from '../../noti-common/service';

export const useGetNotiList = (params: IParamsNotiList) => {
  const {
    data: dataNotiList,
    isLoading: isLoadingNotiList,
    fetchNextPage: fetchNextPageNotiList,
    isFetchingNextPage: isFetchingNextPageNotiList,
    hasNextPage: hasNextPageNotiList
  } = useInfiniteQuery(
    ["NOTI_LIST", params],
    ({ pageParam = params.page }) => getNotiList({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: INotiList) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 60000,
    }
  );

  return {
    dataNotiList,
    isLoadingNotiList,
    fetchNextPageNotiList,
    isFetchingNextPageNotiList,
    hasNextPageNotiList
  };
};
