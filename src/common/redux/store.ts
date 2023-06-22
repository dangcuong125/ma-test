"use client";
import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

export const useDispatch = () => useAppDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { dispatch };
