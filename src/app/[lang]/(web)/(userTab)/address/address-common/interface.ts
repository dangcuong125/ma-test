export interface IProvinceParams {
  searchText: string;
  type: string;
  parentId: number | undefined;
}
export interface InitialState {
  isOpenEditForm: boolean;
  idEdit: number;
  isOpenCreateForm: boolean;
  provinceParams: IProvinceParams;
}

export interface ISubmitData {
  recipientName: string;
  phoneNumber: string;
  province: { id: number; name: string };
  district: { id: number; name: string };
  ward: { id: number; name: string };
  detailAddress: string;
  isDefault: boolean;
}

export interface IParamsAddressList {
  page: number;
  limit: number;
}

export interface IAddressItem {
  id: number;
  recipientName: string;
  phoneNumber: string;
  address: string;
  isDefault: boolean;
}
export interface IResAddressList {
  items: IAddressItem[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface IdataCreateAddress {
  recipientName: string;
  phoneNumber: string;
  provinceId: number;
  districtId: number;
  wardId: number;
  detailAddress: string;
  isDefault: boolean;
}

export interface IFormCallback {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export interface IParamsProvinceList {
  type: string;
  parentId?: number | undefined;
  searchText?: string;
  page?: number;
  limit?: number;
}

export interface IProvince {
  id: number;
  name: string;
  type: string;
  parentId: number | null;
}
export interface IResProvinceList {
  items: IProvince[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface IResAddressDetail {
  id: number;
  recipientName: string;
  phoneNumber: string;
  isDefault: boolean;
  province: {
    id: number;
    provinceDetails: [
      {
        id: number;
        lang: string;
        name: string;
      }
    ];
  };
  district: {
    id: number;
    districtDetails: [
      {
        id: number;
        lang: string;
        name: string;
      }
    ];
  };
  ward: {
    id: number;
    wardDetails: [
      {
        id: number;
        lang: string;
        name: string;
      }
    ];
  };
  addressDetail: string;
}

export interface IDataEditAddress {
  id: number;
  recipientName: string;
  phoneNumber: string;
  provinceId: number;
  districtId: number;
  wardId: number;
  addressDetail: string;
  isDefault: boolean;
}
