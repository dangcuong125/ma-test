import { INotiList, IParamsNotiList } from "./interface";

export const getNotiList = async (
  params: IParamsNotiList
): Promise<INotiList> => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4MCwiaWF0IjoxNjg4NTMwNDM2LCJleHAiOjE2ODg1NjY0MzZ9.VjULStOhxErg3vimRedqiHiZNRZkvVUScDHgamNkNVs",
  };
  const response = await fetch(
    "https://api-dev-loyalty-2.bilisoftware.com/api/customer/user-noti?" +
      new URLSearchParams({
        page: params.page.toString(),
        limit: params.limit.toString(),
      }),
    { headers }
  );
  return response.json();
};

export const getCountUnread = async (): Promise<number> => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4MCwiaWF0IjoxNjg4NTMwNDM2LCJleHAiOjE2ODg1NjY0MzZ9.VjULStOhxErg3vimRedqiHiZNRZkvVUScDHgamNkNVs",
  };
  const response = await fetch(
    "https://api-dev-loyalty-2.bilisoftware.com/api/customer/user-noti/count-unread",
    { headers }
  );
  return response.json();
};