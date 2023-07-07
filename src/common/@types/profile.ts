export interface ICustomerProfileResponse {
  id: number;
  phoneNumber: string;
  email: string;
  name: string;
  birthDate: string;
  avatar: ICustomerAvatar;
}

export interface ICustomerAvatar {
  id: number;
  key: string;
  type: string;
  url: string;
}
