import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

// logined user object and user connection status types
export interface userState {
  user: Partial<User> | null;
  chattingTo: string | null;
  connection: string;
}

const initialState: userState = {
  user: null,
  chattingTo: null,
  connection: "🔴",
};
//create User slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User> | null>) => {
      state.user = action.payload;
    },
    setConnection: (state, action: PayloadAction<string>) => {
      state.connection = action.payload;
    },
    setChattingTo: (state, action: PayloadAction<string | null>) => {
      state.chattingTo = action.payload;
    },
  },
});

export const { setUser, setConnection, setChattingTo } = userSlice.actions;

export default userSlice.reducer;
