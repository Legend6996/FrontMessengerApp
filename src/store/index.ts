import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		// middleware: (getDefaultMiddleware) =>
		// 	getDefaultMiddleware().concat(productsApi.middleware),
	});
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
