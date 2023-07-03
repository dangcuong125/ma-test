import { useQuery } from "react-query"
import { getCountUnread } from "../../noti-common/service"

export const useGetTotalUnread = () => {
    const {data: dataTotalUnread, isLoading: isLoadingTotalUnread} = useQuery(["TOTAL_UNREAD_NOTI"], () => getCountUnread(), {
        cacheTime: 60000,
    })
    return {dataTotalUnread, isLoadingTotalUnread}
}