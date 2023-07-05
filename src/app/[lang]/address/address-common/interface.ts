export interface InitialState {
  isOpenEditForm: boolean;
}

export interface ISubmitData {
  recipientName: string;
  phoneNumber: string;
  city: { id: number; name: string };
  district: { id: number; name: string };
  ward: { id: number; name: string };
  detailAddress: string;
  isDefault: boolean;
}
