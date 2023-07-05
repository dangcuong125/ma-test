import { useInfiniteQuery } from "react-query";
import { IParamsSearchProvince } from "../interface";
import { QUERY_KEYS } from "../../../../common/constants/queryKeys.constant";
import { getDataProvince } from "../services";

export const useGetProvinceData = (params: IParamsSearchProvince) => {
  return useInfiniteQuery(
    [QUERY_KEYS.PROVINCE_DATA, params],
    ({ pageParam = 1 }) => getDataProvince(pageParam, params),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.data?.meta?.currentPage ===
          lastPage?.data?.meta?.totalPages
          ? undefined
          : lastPage?.data?.meta?.currentPage + 1;
      },
    }
  );
};
