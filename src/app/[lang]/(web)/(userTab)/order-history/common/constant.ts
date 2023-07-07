export enum OrderStatus {
  ON_HOLD = "ON_HOLD",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PROCESSING = "PROCESSING",
  REFUNDED = "REFUNDED",
}

export const LIST_TAB_CONTENT = [
  {
    label: "Tất cả đơn hàng",
    value: "",
  },
  {
    label: "Đã tiếp nhận",
    value: OrderStatus.ON_HOLD,
  },
  {
    label: "Đang vận chuyển",
    value: OrderStatus.PROCESSING,
  },
  {
    label: "Giao thành công",
    value: OrderStatus.COMPLETED,
  },
  {
    label: "Giao thất bại",
    value: OrderStatus.CANCELLED,
  },
];
