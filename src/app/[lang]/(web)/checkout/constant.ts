export const STEPS = ["Giỏ quà", "Địa chỉ", "Thanh toán"];

export const TABLE_CART_PRODUCT_HEAD = [
  { id: "product", label: "Sản phẩm", align: "left" },
  { id: "price", label: "Giá thành", align: "center" },
  { id: "quantity", label: "Số lượng", align: "center" },
  { id: "totalPrice", label: "Thành tiền", align: "right" },
  { id: "" },
];
export const TABLE_PAYMENT_PRODUCT_HEAD = [
  { id: "product", label: "Sản phẩm", align: "left" },
  { id: "price", label: "Giá thành", align: "center" },
  { id: "quantity", label: "Số lượng", align: "center" },
  { id: "totalPrice", label: "Thành tiền", align: "right" },
];

export const _addressBooks = [...Array(5)].map((_, index) => ({
  id: 1,
  receiver: "abc" + index,
  fullAddress: "Ha noi",
  phone: "0987654345",
  addressType: "Home",
  isDefault: index === 0,
}));

export const paramsDefault = {
  page: 1,
  limit: 20,
};

export const productFavorite = {
  title: "Có thể bạn cũng thích",
  data: [
    {
      image: "/Subtract.png",
      name: "Đào hồng",
    },
    {
      image: "/Subtract.png",
      name: "Đào hồng",
    },
    {
      image: "/Subtract.png",
      name: "Đào hồng",
    },
    {
      image: "/Subtract.png",
      name: "Đào hồng",
    },
    {
      image: "/Subtract.png",
      name: "Đào hồng",
    },
    {
      image: "/Subtract.png",
      name: "Đào hồng",
    },
  ],
};
