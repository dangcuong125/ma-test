import { SideBarItemType } from "./interface";

export const SIDE_BAR_ITEM = [
  {
    type: SideBarItemType.PROFILE,
    src: "/assets/icons/sidebar/usersquare.svg",
    name: "sidebar.profile",
    path: "/profile",
  },
  {
    type: SideBarItemType.ADDRESS,
    src: "/assets/icons/sidebar/location.svg",
    name: "sidebar.address",
    path: "/address",
  },
  {
    type: SideBarItemType.ORDER,
    src: "/assets/icons/sidebar/shoppingbag.svg",
    name: "sidebar.eVoucher",
    path: "/e-voucher",
  },
  {
    type: SideBarItemType.HISTORY,
    src: "/assets/icons/sidebar/trucktime.svg",
    name: "sidebar.orderHistory",
    path: "/order-history",
  },
  {
    type: SideBarItemType.NOTIFICATION,
    src: "/assets/icons/sidebar/notification.svg",
    name: "sidebar.notifications",
    path: "/notify",
  },
  {
    type: SideBarItemType.POLICY,
    src: "/assets/icons/sidebar/note-text.svg",
    name: "sidebar.policy",
    path: "/policy",
  },
  {
    type: SideBarItemType.HELP,
    src: "/assets/icons/sidebar/headphone.svg",
    name: "sidebar.help",
    path: "/help",
  },
  {
    type: SideBarItemType.TERM,
    src: "/assets/icons/sidebar/note.svg",
    name: "sidebar.term",
    path: "/term",
  },
];

export const DEFAULT_AVATAR = "/assets/default-avatar.png";

export const ICON_EDIT = "/assets/icons/sidebar/edit2.svg";
