import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICheatSheetResponse {
  _id: string;
  name: string;
  content: any;
  imageUrl: string;
  imageDimensions: { aspectRatio: number; height: number; width: number };
  _createdAt: string;
  _updatedAt: string;
}

type CheatSheetsState = ICheatSheetResponse[] | [];

const initialState: CheatSheetsState = [];

const cheatSheetsSlice = createSlice({
  name: "cheatSheets",
  initialState,
  reducers: {
    addCheatSheet(state, action: PayloadAction<ICheatSheetResponse>) {
      // "Mutate" the existing state, no return value needed
      if (state.find((c) => c._id === action.payload._id)) {
        return state;
      } else {
        return [...state, action.payload];
      }
    },
    deleteCheatSheet(state, action: PayloadAction<ICheatSheetResponse>) {
      // Construct a new result array immutably and return it
      return state.filter(
        (cheatSheet) => cheatSheet._id !== action.payload._id,
      );
    },
  },
});

export const { deleteCheatSheet, addCheatSheet } = cheatSheetsSlice.actions;
export default cheatSheetsSlice.reducer;
