import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";

export const RegisterSchema = () => {
  const { t } = useTranslation("common");
  return yup.object().shape({
    fullName: yup
      .string()
      .required(t("form.field_required")),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu có từ 10 ký tự bao gồm chữ thường, chữ hoa và số')
      .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{10,50}$/gm,
        'Mật khẩu phải trong khoảng 10 đến 50 kí tự, bao gồm ít nhất 1 chữ và 1 số',
      ),
    confirmPassword: yup
      .string()
      .required(t("form.field_required"))
      .oneOf(
        [yup.ref('password')],
        'Mật khẩu không trùng khớp, vui lòng nhập lại',
      ),
  });
};

