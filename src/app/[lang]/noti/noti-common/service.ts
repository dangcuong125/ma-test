import { IParamsNotiList } from "./interface";

export const getNotiList = async (params: IParamsNotiList) => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5NSwiaWF0IjoxNjg4MDk4MzU4LCJleHAiOjE2ODgxMzQzNTh9.SxKQ4k_QRW5x7CE9LigiVoRz3W8Bu4a6jXLPwkwZaI8",
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
