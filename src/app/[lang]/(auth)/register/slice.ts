import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type RegisterStateProps = {
  phoneNumber: string;
  otpValue: string;
  isShowPassword: boolean;
};

const initialState: RegisterStateProps = {
  phoneNumber: "",
  otpValue: "",
  isShowPassword: false,
};

const registerSlice = createSlice({
  name: "register",
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
  registerSlice.actions;

export default registerSlice.reducer;
