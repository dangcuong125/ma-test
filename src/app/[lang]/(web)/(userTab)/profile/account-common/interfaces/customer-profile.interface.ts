import { CustomFile } from "@/common/components/upload";

export interface IFormCustomerProfile {
  id: number;
  name: string;
  email: string;
  photoURL: CustomFile | string;
  phoneNumber: string;
  address: string;
  createdAt: string | null;
  status: string | null;
  rank: string | null;
  birthday: string;
  avatar?: {
    url?: string;
    id?: number;
  };
}

export type StateProps = {
  profile: Partial<IFormCustomerProfile>;
  showOldPassword: boolean;
  showNewPassword: boolean;
};

export interface IResImage {
  file: {
    key: string;
    type: string;
    size: number;
    uploaderId: number;
    deletedAt: string | null;
    url: string;
    createdAt: string;
    version: number;
    id: number;
  };
}
export interface ImageInfo {
  id: number;
  url: string;
}
export interface IEditCustomerForm {
  name: string;
  address: string;
  phoneNumber: string;
  avatarId: number;
}

export interface IFormCallback {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export interface IAccountHeaderProps {
  title: string;
}
