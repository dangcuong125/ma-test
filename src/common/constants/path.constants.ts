export const PATH_AUTH = {
  login: "/login",
  register: "/register",
  forgot_password: "/forgot-password",
  otp: "/otp",
  reset_password: "/reset-password",
  create_information: "/create-information",
};

export const PATH_HOME = {
  root: "/",
  add_point: "/loyalty/add-point",
  add_point_success: "/loyalty/add-point/success",
  product: {
    root: "/category",
    detail: (id: number) => `/productDetail/${id}`,
  },
  order_history: {
    list: "/order-history",
    detail: "/order-history/:id",
  },
  checkout: "/checkout",
};
