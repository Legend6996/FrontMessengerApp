import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const allActions = {
// 	...shopCartActions,
// };

// export const useActions = () => {
// 	const dispatch = useDispatch();
// 	return bindActionCreators(allActions, dispatch);
// };
