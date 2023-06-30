export interface InitialState {
  isOpenSideBar: boolean;
  valueTab: number;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  indexTab: number;
  valueTab: number;
}

export interface IParamsNotiList {
  page: number;
  limit: number;
}
