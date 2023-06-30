import { combineReducers } from "@reduxjs/toolkit";
import notiReducer from "../../app/[lang]/noti/noti-common/slice";

const rootReducer = combineReducers({
  noti: notiReducer,
});

export { rootReducer };
