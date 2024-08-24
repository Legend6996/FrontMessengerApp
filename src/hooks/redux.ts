import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { userActions } from "@/store/reducers/UserSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { columnsActions } from "@/store/reducers/ColumnsSlice";

// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const allActions = {
	...userActions,
  ...columnsActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
