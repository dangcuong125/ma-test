import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StateProps } from "../interfaces/customer-profile.interface";
import { RootState } from "@/common/redux/store";

const initialState: StateProps = {
  profile: {},
  showNewPassword: false,
  showOldPassword: false,
};
export const customerProfileSlice = createSlice({
  name: "customerProfile",
  initialState,
  reducers: {
    setCustomerInfo: (state, action) => {
      state.profile = action.payload;
    },
    setShowOldPassword: (state, action: PayloadAction<boolean>) => {
      state.showOldPassword = action.payload;
    },
    setShowNewPassword: (state, action: PayloadAction<boolean>) => {
      state.showNewPassword = action.payload;
    },
  },
});

export const { setCustomerInfo, setShowNewPassword, setShowOldPassword } =
  customerProfileSlice.actions;

export const customerInfoSelector = (state: RootState) =>
  state.customerProfile.profile;
export const customerShowOldSelector = (state: RootState) =>
  state.customerProfile.showOldPassword;
export const customerShowNewSelector = (state: RootState) =>
  state.customerProfile.showNewPassword;

export default customerProfileSlice.reducer;
