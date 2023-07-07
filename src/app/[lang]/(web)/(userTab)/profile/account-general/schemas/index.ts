import * as Yup from "yup";

export const UpdateCustomerSchema = Yup.object().shape({
  name: Yup.string().required("Tên không được để trống"),
  phoneNumber: Yup.string()
    .min(8, "Số điên thoại không hợp lệ")
    .max(11, "Số điên thoại không hợp lệ")
    .required("Số điện thoại không được để trông"),
  birthDate: Yup.string().required("Ngày sinh không được để trống"),
  email: Yup.string()
    .required("Vui lòng nhập email của bạn")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Định dạng email không đúng"
    ),
});

// address: Yup.string().required("Địa chỉ không được để trông"),
