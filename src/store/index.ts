import { authApi } from "@/servicesApi/AuthApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer, userSlice } from "./reducers/UserSlice";
import { userApi } from "@/servicesApi/UserApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [userSlice.name]: userReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
	});
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
