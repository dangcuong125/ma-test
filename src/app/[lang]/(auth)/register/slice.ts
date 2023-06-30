import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthStateProps = {
    phoneNumber: string;
}

const initialState: AuthStateProps = {
    phoneNumber: '',
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        }
    }
})

export const {setPhoneNumber} = registerSlice.actions;

export default registerSlice.reducer;