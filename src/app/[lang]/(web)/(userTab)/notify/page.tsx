import NotiList from "./noti-list";
import { getNotiList } from "./noti-common/service";

const NotiListPage = async () => {
  const dataNoti = await getNotiList({ page: 1, limit: 10 });
  const Notifications = dataNoti.items || [];
  return (
    <>
      <NotiList listNoti={Notifications} />
    </>
  );
};

export default NotiListPage;
