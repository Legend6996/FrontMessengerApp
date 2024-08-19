import { IUser } from "@/lib/models/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialUser: IUser = { name: "", email: "", userName: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      return action.payload;
    }
  }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
