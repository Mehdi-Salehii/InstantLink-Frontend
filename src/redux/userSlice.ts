import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface userState {
  user: Partial<User> | undefined;
}

const initialState: userState = {
  user: undefined,
};
//create User slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<userState>) => {
      action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
