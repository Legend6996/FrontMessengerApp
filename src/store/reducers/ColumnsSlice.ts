import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IColumns {
	isOpenLeftColumn: boolean;
	isOpenRightColumn: boolean;
}

const initialColumns: IColumns = {
	isOpenLeftColumn: true,
	isOpenRightColumn: false,
};

export const columnsSlice = createSlice({
	name: "columns",
	initialState: initialColumns,
	reducers: {
		setIsOpenLeftColumn(state, action: PayloadAction<boolean>) {
			if (window.innerWidth < 1024) {
				state.isOpenLeftColumn = action.payload;
			}
		},
		toggleLeftColumn(state) {
      console.log("left " + state.isOpenLeftColumn)
			state.isOpenLeftColumn = !state.isOpenLeftColumn;
		},
		setIsOpenRightColumn(state, action: PayloadAction<boolean>) {
			state.isOpenRightColumn = action.payload;
		},
		toggleRightColumn(state) {
      console.log("right " + state.isOpenRightColumn)
			state.isOpenRightColumn = !state.isOpenRightColumn;
		},
	},
});

export const coolumnsReducer = columnsSlice.reducer;
export const columnsActions = columnsSlice.actions;
