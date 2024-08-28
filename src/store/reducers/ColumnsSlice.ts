import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LeftColumnState = "chats" | "settings" | "profileEdit"

interface IColumns {
	isOpenLeftColumn: boolean;
	isOpenRightColumn: boolean;
  leftColumnState: LeftColumnState;
}

const initialColumns: IColumns = {
	isOpenLeftColumn: true,
	isOpenRightColumn: false,
  leftColumnState: "chats"
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
    setLeftColumnState(state, action: PayloadAction<LeftColumnState>) {
      console.log(action.payload);
      state.leftColumnState = action.payload;
    }
	},
});

export const coolumnsReducer = columnsSlice.reducer;
export const columnsActions = columnsSlice.actions;
