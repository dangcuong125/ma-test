export interface IOrderState {
  activeStep: number;
  cart: ICartItem[];
  subtotal: number;
  total: number;
  discount: number;
  shipping: number;
  billing: BillingAddress | null;
  openModalAddAddress: boolean;
}

export type BillingAddress = {
  receiver: string;
  phone: string;
  fullAddress: string;
  addressType: string;
  isDefault: boolean;
};

export type OnCreateBilling = (address: BillingAddress) => void;

export type ICartItem = {
  quantity: number;
  productToVariantIds: number[];
  isValid: boolean;
  product: IProductCart;
};

export type IProductCart = {
  onSale: boolean;
  id: number;
  type: string;
  isFeatured: boolean;
  taxStatus: string;
  defaultProductVariantId: number;
  thumbnail: {
    id: number;
    url: string;
  };
  productDetails: IProductDetail[];
  productVariants: IProductVariantItem[];
};

export type IProductDetail = {
  lang: string;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
};

export type IProductVariantItem = {
  id: number;
  price: number;
  quantity: number;
  salePrize: number;
  sku: string;
  name: string;
  productAttributeTerms: {
    id: number;
    productAttributeTermDetails: IProductAttributeTermDetail[];
    productAttribute: {
      id: number;
      type: string;
      productAttributeDetails: {
        id: number;
        lang: string;
        name: string;
        description: string;
      }[];
    };
  }[];
  productVariantPoint: {
    id: number;
    point: number;
    salePoint: number;
  };
};

export type IProductAttributeTermDetail = {
  id: number;
  lang: string;
  value: string;
};

export type IParamsUpdateCartItem = {
  productToVariantIds: number[];
  quantity: number;
};

export type IResCheckoutCart = {
  data: ICartItem[];
};

export type IOrderShippingResponse = {
  data: {
    items: IOrderShippingItem[];
  };
};

export type IOrderShippingItem = {
  id: number;
  userId: number;
  name: string;
  address1: string;
  province: string;
  ward: string;
  district: string;
  phone: string;
  isDefault: boolean;
};

export type IFormProvince = {
  name: string;
  phone: string;
  street: string;
  PROVINCE: string;
  DISTRICT: string;
  WARD: string;
  PROVINCE_Value: string;
  DISTRICT_Value: string;
  WARD_Value: string;
  isDefault: boolean;
  isSaveAddress: boolean;
};

export interface IParamsSearchProvince {
  type: string;
  parentId?: number;
  searchText?: string;
  page: number;
  limit: number;
}

export interface IProvinceResponses {
  data: {
    items: IProvinceItem[];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  };
}

export interface IProvinceItem {
  id: number;
  name: string;
  type: string;
  parentId: number;
}
