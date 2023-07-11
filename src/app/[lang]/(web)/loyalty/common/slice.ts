import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  EUserRank,
  IAddPointSuccess,
  IGamePlayTime,
  IResAddPoint,
} from "./interface";

const initialState: IAddPointSuccess = {
  data: {
    addPoint: 0,
    percent: 0,
    tierCode: EUserRank.MEMBER,
    nextTierCode: EUserRank.MEMBER,
    lackRankPoint: 0,
  },
  isOpenGamePopup: false,
  gameData: [],
};

const addPointSuccessSlice = createSlice({
  name: "add-point-success",
  initialState,
  reducers: {
    setAddPointSuccess: (state, action: PayloadAction<IResAddPoint>) => {
      state.data = action.payload;
    },
    setOpenGamePopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenGamePopup = action.payload;
    },
    closeCurrentPopup: (state) => {
      if (state.gameData.length === 1) {
        state.isOpenGamePopup = false;
        return;
      }
      state.gameData.shift();
    },
    setGamePopupData: (state, action: PayloadAction<IGamePlayTime[]>) => {
      state.gameData = action.payload;
    },
  },
});
export const {
  setAddPointSuccess,
  setOpenGamePopup,
  closeCurrentPopup,
  setGamePopupData,
} = addPointSuccessSlice.actions;

export default addPointSuccessSlice.reducer;
