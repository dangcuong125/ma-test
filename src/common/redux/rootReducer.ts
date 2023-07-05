import authLoginSlice from "@/app/[lang]/(auth)/login/reducers/auth.slice";
import loginSlice from "@/app/[lang]/(auth)/login/reducers/login.slice";
import registerSlice from "@/app/[lang]/(auth)/register/slice";
import checkoutSlice from "@/app/[lang]/(web)/checkout/order.slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authLogin: authLoginSlice,
  login: loginSlice,
  register: registerSlice,
  checkout: checkoutSlice,
});

export { rootReducer };
