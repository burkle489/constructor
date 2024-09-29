import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SideMenuState {
  open: boolean;
}

const initialState: SideMenuState = {
  open: false,
};

const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    setSideMenu: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setSideMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
