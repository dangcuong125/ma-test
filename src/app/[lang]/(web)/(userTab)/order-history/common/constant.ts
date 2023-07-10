import { IconOnCompleted } from "../components/icons/IconOnCompleted";
import { IconProcessing } from "../components/icons/IconProcessing";
import { IconOnHolding } from "./../components/icons/IconOnHolding";
import { OrderRefundStatus } from "./interface";

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

export const ORDER_STATUS = [
  {
    title: "Đã tiếp nhận",
    Icon: IconOnHolding,
    status: OrderStatus.ON_HOLD,
    color: "#54D62C",
  },
  {
    title: "Giao hàng thất bại",
    Icon: IconOnHolding,
    status: OrderStatus.CANCELLED,
    color: "#FF4842",
  },
  {
    title: "Giao hàng thành công",
    Icon: IconOnCompleted,
    status: OrderStatus.COMPLETED,
    color: "#54D62C",
  },
  {
    title: "Đang vận chuyển",
    Icon: IconProcessing,
    status: OrderStatus.PROCESSING,
    color: "#54D62C",
  },
  {
    title: "Đã hoàn xu",
    Icon: IconOnHolding,
    status: OrderRefundStatus.REFUNDED,
    color: "#1DA891",
  },
];
