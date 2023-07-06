import * as Yup from "yup";

export const UpdateCustomerSchema = Yup.object().shape({
  name: Yup.string().required("Tên không được để trống"),
  phoneNumber: Yup.string()
    .min(8, "Số điên thoại không hợp lệ")
    .max(11, "Số điên thoại không hợp lệ")
    .required("Số điện thoại không được để trông"),
  birthday: Yup.string().matches(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    "Vui lòng nhập đúng định dạng ngày sinh DD/MM/YYYY"
  ),
  email: Yup.string()
    .required("Vui lòng nhập email của bạn")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Định dạng email không đúng"
    ),
});

// address: Yup.string().required("Địa chỉ không được để trông"),
