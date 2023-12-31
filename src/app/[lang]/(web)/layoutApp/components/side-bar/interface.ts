export enum SideBarItemType {
  NOTIFICATION = "NOTIFICATION",
  PROFILE = "PROFILE",
  HISTORY = "HISTORY",
  ORDER = "ORDER",
  ADDRESS = "ADDRESS",
  POLICY = "POLICY",
  HELP = "HELP",
  TERM = "TERM",
}

export interface SideBarItemProps {
  type: SideBarItemType;
  src: string;
  name: string;
  path: string;
  isActiveItem?: boolean;
}

export interface ISideBarState {
  currentSideBar: SideBarItemType;
}
