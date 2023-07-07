export interface IStateProps {
  isReviewModal: boolean;
  productVariantSelected: IProductVariants | null;
  attributeSelected: IVariantAttributeTermIdList[];
  quantityCurrent: number;
  variantIdSelect: number;
  isShowPopupNotiLogin: boolean;
  totalVariant: number;
  isOpenOrderNow: boolean;
  quantityVariantOrderNow: number;
  totalPaymentOrderNow: number;
  isAddingCart: boolean;
}

export interface IProductDetailTransform {
  onSale: boolean;
  id: number;
  type: string;
  status: string;
  isFeatured: boolean;
  taxStatus: string;
  defaultProductVariantId: number;
  productDetails: IProductDetails;
  productTags: IProductTag[];
  merchant: IMerchant;
  productVariants: IProductVariants[];
  thumbnail: IThumbnailProduct;
  variantIdDetail: IArrayIdProductVariantDetail[];
  attributeAndTerm: ITransformListAttribute[];
  productCategories: IProductCategories[];
}

export interface IProductDDetailRes {
  data: {
    onSale: boolean;
    id: number;
    type: string;
    status: string;
    isFeatured: boolean;
    taxStatus: string;
    defaultProductVariantId: number;
    productDetails: IProductDetails[];
    productTags: IProductTag[];
    merchant: IMerchant;
    productVariants: IProductVariants[];
    thumbnail: IThumbnailProduct;
    productCategories: IProductCategories[];
  };
}

export interface IProductCategories {
  id: number;
  categoryDetails: ICategoryDetails[];
}

export interface ICategoryDetails {
  id: number;
  lang: string;
  desc: string;
  name: string;
  slug: string;
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
  name: string;
  quantity: number;
  salePrice: number;
  sku: string;
  productAttributeTerms: IProductAttributes[];
  images: IProductVariantImage[];
  productVariantPoint: IProductVariantPoint;
  productVariantDetails: {
    id: number;
    lang: string;
    description: string;
    name: string;
  }[];
}

export interface IProductVariantPoint {
  id: number;
  point: number;
  salePoint: number;
}

export interface IProductAttributes {
  id: number;
  productAttribute: {
    id: number;
    type: string;
    productAttributeDetails: IProductAttributeDetailItem[];
  };
  productAttributeTermDetails: IProductAttributeTermItem[];
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

export interface IProductVariantImage {
  fileId: number;
  id: number;
  type: string;
  url: string;
}

export interface IThumbnailProduct {
  createdAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  key: string;
  url: string;
  type: string;
  size: number;
  uploaderId: number;
}

export interface IParamsDetail {
  id: number;
  // merchantId: number;
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
