import authLoginSlice from "@/app/[lang]/(auth)/login/reducers/auth.slice";
import loginSlice from "@/app/[lang]/(auth)/login/reducers/login.slice";
import registerSlice from "@/app/[lang]/(auth)/register/slice";
import addressSlice from "@/app/[lang]/(web)/(userTab)/address/address-common/slice";
import orderHistorySlice from "@/app/[lang]/(web)/(userTab)/order-history/common/slice";
import customerSlice from "@/app/[lang]/(web)/(userTab)/profile/account-common/reducers/customer-profile.slice";
// import forgotPasswordSlice from '@/app/[lang]/(auth)/forgot-password/slice';
import searchSlice from "@/app/[lang]/(web)/layoutApp/search.slice";
import checkoutSlice from "@/app/[lang]/(web)/checkout/order.slice";
import headerSlice from "@/app/[lang]/(web)/layoutApp/components/header/header.slice";
import addPointSuccessSlice from '@/app/[lang]/(web)/loyalty/common/slice';
import categoryReducer from "@/app/[lang]/(web)/category/category.slice";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authLogin: authLoginSlice,
  login: loginSlice,
  register: registerSlice,
  address: addressSlice,
  checkout: checkoutSlice,
  customerProfile: customerSlice,
  // forgotPassword: forgotPasswordSlice,
  search: searchSlice,
  headerSlice: headerSlice,
  orderHistory: orderHistorySlice,
  addPointSuccess: addPointSuccessSlice,
  categoryRoot: categoryReducer,
});

export { rootReducer };
