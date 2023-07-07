import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ForgotPasswordStateProps = {
  phoneNumber: string;
  otpValue: string;
  isShowPassword: boolean;
};

const initialState: ForgotPasswordStateProps = {
  phoneNumber: "",
  otpValue: "",
  isShowPassword: false,
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setOtpValue: (state, action: PayloadAction<string>) => {
      state.otpValue = action.payload;
    },
    setShowPassword: (state, action: PayloadAction<boolean>) => {
      state.isShowPassword = action.payload;
    },
  },
});

export const { setPhoneNumber, setOtpValue, setShowPassword } =
  forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
