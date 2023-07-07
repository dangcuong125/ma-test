export interface IHistoryPoint {
  id: number;
  point: number;
  eventName: string;
  image: string;
  type: string;
  createdDate: string;
}

export enum TypeHistoryPoint {
  ADD = "ADD",
  EXCHANGE = "EXCHANGE",
}
