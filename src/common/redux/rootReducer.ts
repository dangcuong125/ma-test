import authLoginSlice from "@/app/[lang]/(auth)/login/reducers/auth.slice";
import loginSlice from "@/app/[lang]/(auth)/login/reducers/login.slice";
import registerSlice from "@/app/[lang]/(auth)/register/slice";
import checkoutSlice from "@/app/[lang]/(web)/checkout/order.slice";
import { combineReducers } from "@reduxjs/toolkit";
import addressSlice from "@/app/[lang]/(web)/(userTab)/address/address-common/slice";
import customerSlice from "@/app/[lang]/(web)/(userTab)/profile/account-common/reducers/customer-profile.slice";
import forgotPasswordSlice from "@/app/[lang]/(auth)/forgot-password/slice";
import orderHistorySlice from "@/app/[lang]/(web)/(userTab)/order-history/common/slice";

const rootReducer = combineReducers({
  authLogin: authLoginSlice,
  login: loginSlice,
  register: registerSlice,
  address: addressSlice,
  checkout: checkoutSlice,
  customerProfile: customerSlice,
  forgotPassword: forgotPasswordSlice,
  orderHistory: orderHistorySlice,
});

export { rootReducer };
