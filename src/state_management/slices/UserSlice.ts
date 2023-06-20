import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {user:""},
  reducers: {
    setUser: (state:any, action) => {
       state.user = action.payload; 
    },
  }
});

export default userSlice.reducer; 

export const {
setUser
} = userSlice.actions;