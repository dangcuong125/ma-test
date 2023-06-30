import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';
type AuthLoginProps = {
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  customerCode: string;
  isExpiredToken: boolean;
};
const initialState: AuthLoginProps = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  customerCode: '',
  isExpiredToken: false,
};
export const authLoginSlice = createSlice({
  name: 'authLogin',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setLogout: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    resetToken: (state) => {
      state.accessToken = initialState.accessToken;
      state.refreshToken = initialState.refreshToken;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    setCustomerCode: (state, action: PayloadAction<string>) => {
      state.customerCode = action.payload;
    },
    setIsExpiredToken: (state, action: PayloadAction<boolean>) => {
      state.isExpiredToken = action.payload;
    }
  },
});

export const {
  setIsLoggedIn,
  setLogout,
  setAccessToken,
  setRefreshToken,
  resetToken,
  setCustomerCode,
  setIsExpiredToken,
} = authLoginSlice.actions;

export default authLoginSlice.reducer;