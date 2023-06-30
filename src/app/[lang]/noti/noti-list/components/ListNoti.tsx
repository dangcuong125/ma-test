import { Box } from "@mui/material";
import NotiItem from "./NotiItem";
import { getNotiList } from "../../noti-common/service";
import { ReactNode } from "react";

export default async function ListNoti(): Promise<ReactNode> {
  const list: any = await getNotiList({ page: 1, limit: 10 });
  console.log(list);
  return (
    <Box mb={"90px"}>
      {/* all noti */}
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} unread />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />
      <NotiItem indexTab={0} />

      {/* unread noti */}
      <NotiItem indexTab={1} unread />
      <NotiItem indexTab={1} unread />
    </Box>
  );
}
