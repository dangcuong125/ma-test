import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type AuthLoginProps = {
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  isExpiredToken: boolean;
  isOpenOtpModal: boolean;
};
const initialState: AuthLoginProps = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  isExpiredToken: false,
  isOpenOtpModal: false,
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
    setOpenOtpModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenOtpModal = action.payload;
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
  setOpenOtpModal,
  setIsExpiredToken,
} = authLoginSlice.actions;

export default authLoginSlice.reducer;