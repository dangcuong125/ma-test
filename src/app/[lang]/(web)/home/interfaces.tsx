export enum ITypeSections {
  BANNER = "BANNER",
  FLOAT_SERVICE = "FLOAT_SERVICE",
  NORMAL_SERVICE = "NORMAL_SERVICE",
  HORIZONTAL_PRODUCT_LIST_1 = "HORIZONTAL_PRODUCT_LIST_1",
  HORIZONTAL_PRODUCT_LIST_2 = "HORIZONTAL_PRODUCT_LIST_2",
  PROMOTION_BANNER = "PROMOTION_BANNER",
}

export interface IFormHome {
  sections: {
    data: any[];
    type: string;
  }[];
}

export interface IResHomeConfig {
  sections: any;
}