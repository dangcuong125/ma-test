export interface InitialState {
  isOpenSideBar: boolean;
  valueTab: number;
  totalAll: number;
  totalUnread: number;
}

export interface IParamsNotiList {
  page: number;
  limit: number;
}

export interface INoti {
  id: number;
  deepLink: string;
  content: string;
  metaData: any;
  routeType: string;
  senderId: number;
  shortContent: string;
  timeSent: string;
  title: string;
  type: string;
}

export interface INotiItem {
  id: number;
  isRead: boolean;
  noti: INoti;
  notiId: number;
  userId: number;
}

export interface INotiList {
  items: INotiItem[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}
