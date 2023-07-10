import { IHistoryPoint } from "../interfaces/interface";

export const DataHistoryPoint: Array<IHistoryPoint> = [
  {
    id: 1,
    eventName: "Ưu đãi cuối năm",
    point: 3,
    type: "ADD",
    createdDate: new Date().toLocaleString(),
    image:
      "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/bd1921b6-4be0-4d8a-85b4-381731d6e157.png",
  },
  {
    id: 2,
    point: 1200,
    eventName: "Shopping Day of the Year",
    type: "EXCHANGE",
    createdDate: new Date().toLocaleString(),
    image:
      "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/bd1921b6-4be0-4d8a-85b4-381731d6e157.png",
  },
  {
    id: 3,
    point: 50,
    eventName: " Shopping Day of the Year",
    type: "EXCHANGE",
    createdDate: new Date().toLocaleString(),
    image:
      "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/bd1921b6-4be0-4d8a-85b4-381731d6e157.png",
  },
];
