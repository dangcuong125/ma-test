export enum OrderRefundStatus {
  REFUNDED = "REFUNDED",
  REQUEST_REFUND_POINT = "REQUEST_REFUND_POINT",
}

export type IDefaultParams = {
  page: number;
  limit: number;
  statuses: string;
};

export type IListOrderResponse = {
  items: IOrder[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};

export interface IOrder {
  id: number;
  displayId: string;
  status: string;
  note: string;
  currency: string;
  paidAt: string;
  transactionId: number;
  total: number;
  createAt: string;
  type: string;
  shippingTotal: number;
  discountTotal: number;
  orderShipping: IOrderShipping;
  orderLineItemReqDto: IOrderLineItemReqDto[];
  reasonRefund: string;
  refundUserHistoryPoint: IRefundUserHistoryPoint;
  orderRefund: IOrderRefund;
  isRefund: boolean;
}

export interface IOrderRefund {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  version: number;
  id: number;
  status: string;
  reasonRefund: string;
  refundHistoryPointId: number;
  contentRefund: string;
  ownerId: number;
  orderId: number;
  refundHistoryPoint: {
    createdAt: string;
    deletedAt: string;
    id: number;
    point: number;
    action: string;
    expiresAt: string;
    userId: number;
    type: string;
    description: string;
  };
}

export interface IRefundUserHistoryPoint {
  createdAt: string;
  deletedAt: string;
  id: number;
  point: number;
  action: string;
  expiresAt: string;
  userId: number;
  type: string;
  description: string;
}

export interface IOrderLineItemReqDto {
  quantity: number;
  point: number;
  price: number;
  total: number;
  product: IProduct;
}

export interface IOrderShipping {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  postCode: string;
  phone: string;
  district: string;
  province: string;
  ward: string;
}

export interface IProduct {
  onSale: boolean;
  id: number;
  type: string;
  status: string;
  isFeatured: boolean;
  taxStatus: string;
  defaultProductVariantId: number;
  thumbnail: IThumbnailProduct;
  productDetails: IProductDetails[];
  productTags: IProductTag[];
  merchant: IMerchant;
  productVariants: IProductVariants[];
  variantIdDetail: IArrayIdProductVariantDetail[];
  attributeAndTerm: ITransformListAttribute[];
  price: {
    normalPrice: number;
    salePrice: number;
    range: {
      min: number;
      max: number;
    };
  };
  point: {
    normalPoint: number;
    salePoint: number;
    range: {
      min: number;
      max: number;
    };
  };
}

export interface IThumbnailProduct {
  id: number;
  key: string;
  url: string;
  type: string;
  createdAt: string;
  deletedAt: string | null;
  version: number;
  size: number;
  uploaderId: number;
}
export interface IProductDetails {
  lang: string;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
}

export interface IProductTag {
  description: string;
  id: number;
  name: string;
  slug: string;
}
export interface IMerchant {
  id: number;
  name: string | null;
  email: string;
  status: string;
  rank: string;
  address: string | null;
  phoneNumber: string | null;
}
export interface IProductVariants {
  id: number;
  price: number;
  quantity: number;
  salePrice: number;
  sku: string;
  name: string;
  productAttributeTerms: IProductAttributeTerms[];
  images: IProductVariantImage[];
}
export interface IProductAttributeTerms {
  id: number;
  productAttribute: {
    id: number;
    type: string;
    productAttributeDetails: IProductAttributeDetailItem[];
  };
  productAttributeTermDetails: IProductAttributeTermItem[];
}

export interface IArrayIdProductVariantDetail {
  prodVariantId: number;
  variantAtributeList: IVariantAttributeTermIdList[];
}

export interface IVariantAttributeTermIdList {
  attributeId: number;
  termId: number;
}

export interface ITransformListAttribute {
  id: number;
  name: string;
  term: ITransformListTermValue[];
}

export interface ITransformListTermValue {
  id: number;
  value: string;
}

export interface IProductVariantImage {
  fileId: number;
  id: number;
  type: string;
  url: string;
}

export interface IProductAttributeDetailItem {
  id: number;
  description: string;
  lang: string;
  name: string;
  slug: string;
}

export interface IProductAttributeTermItem {
  id: number;
  lang: string;
  value: string;
}
