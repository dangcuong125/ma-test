import authLoginSlice from "@/app/[lang]/(auth)/login/reducers/auth.slice";
import loginSlice from "@/app/[lang]/(auth)/login/reducers/login.slice";
import registerSlice from "@/app/[lang]/(auth)/register/slice";
import addressSlice from "@/app/[lang]/(web)/(userTab)/address/address-common/slice";
import orderHistorySlice from "@/app/[lang]/(web)/(userTab)/order-history/common/slice";
import customerSlice from "@/app/[lang]/(web)/(userTab)/profile/account-common/reducers/customer-profile.slice";
import checkoutSlice from "@/app/[lang]/(web)/checkout/order.slice";
import headerSlice from "@/app/[lang]/(web)/layoutApp/components/header/header.slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authLogin: authLoginSlice,
  login: loginSlice,
  register: registerSlice,
  address: addressSlice,
  checkout: checkoutSlice,
  customerProfile: customerSlice,
  headerSlice: headerSlice,
  orderHistory: orderHistorySlice,
});

export { rootReducer };

