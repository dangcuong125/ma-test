import { INotiList, IParamsNotiList } from "./interface";

export const getNotiList = async (
  params: IParamsNotiList
): Promise<INotiList> => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0MCwiaWF0IjoxNjg4MzU4OTkzLCJleHAiOjE2ODgzOTQ5OTN9.eM6D6zwOYC6ioIdO2425g7dO4AV0jYuEJSagYaWXTLM",
  };
  const response = await fetch(
    "https://api-dev-loyalty-2.bilisoftware.com/api/customer/user-noti?" +
      new URLSearchParams({
        page: params.page.toString(),
        limit: params.limit.toString(),
      }),
    { headers }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getCountUnread = async (): Promise<number> => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0MCwiaWF0IjoxNjg4MzU4OTkzLCJleHAiOjE2ODgzOTQ5OTN9.eM6D6zwOYC6ioIdO2425g7dO4AV0jYuEJSagYaWXTLM",
  };
  const response = await fetch(
    "https://api-dev-loyalty-2.bilisoftware.com/api/customer/user-noti/count-unread",
    { headers }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
