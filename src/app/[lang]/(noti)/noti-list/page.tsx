import { getNotiList } from "../noti-common/service";
import NextPageListNoti from "./components/NextPageListNoti";
import NoDataNoti from "./components/NoDataNoti";
import NotiHeader from "./components/NotiHeader";
import NotiItem from "./components/NotiItem";

const NotiListPage = async () => {
  const dataNoti = await getNotiList({ page: 1, limit: 10 });
  const listNoti = dataNoti.items || [];
  const isNotFound = !listNoti.length;
  return (
    <main>
      <NotiHeader />
      {listNoti.map((item) => (
        <NotiItem key={item.id} notiItem={item} />
      ))}
      <NextPageListNoti />
      <NoDataNoti isOpen={isNotFound} />
    </main>
  );
};

export default NotiListPage;
