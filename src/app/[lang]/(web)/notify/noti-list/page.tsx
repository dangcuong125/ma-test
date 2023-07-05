"use client";
import NotiList from ".";
import { getNotiList } from "../noti-common/service";
import LayoutAppWithUserTab from "./layout";

const NotiListPage = async () => {
  const dataNoti = await getNotiList({ page: 1, limit: 10 });
  const Notifications = dataNoti.items || [];
  return (
    <LayoutAppWithUserTab>
      <NotiList listNoti={Notifications} />
    </LayoutAppWithUserTab>
  );
};

export default NotiListPage;
