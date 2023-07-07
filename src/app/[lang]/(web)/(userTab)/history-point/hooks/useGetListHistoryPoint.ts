import { useQuery } from "react-query";
import { getListHistory } from "../services/getListHistoryPoint";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

export const useGetListHistoryPoint = () => {
  const { data: listHistory, isLoading } = useQuery(
    [QUERY_KEYS.LIST_HISTORY_POINT],
    getListHistory,
    {
      cacheTime: 0,
    }
  );
  return { listHistory, isLoading };
};
