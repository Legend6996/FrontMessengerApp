import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IColumns {
	isOpenLeftColumn: boolean;
}

const initialColumns: IColumns = { isOpenLeftColumn: true };

export const columnsSlice = createSlice({
	name: "columns",
	initialState: initialColumns,
	reducers: {
		setIsOpenLeftColumn(state, action: PayloadAction<boolean>) {
      if(window.innerWidth < 1024) {
        state.isOpenLeftColumn = action.payload;
      }
		},
    toggleLeftColumn(state) {
      console.log(state.isOpenLeftColumn);
      state.isOpenLeftColumn = !state.isOpenLeftColumn;
    }
	},
});

export const coolumnsReducer = columnsSlice.reducer;
export const columnsActions = columnsSlice.actions;
