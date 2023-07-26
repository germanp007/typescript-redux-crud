import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer from "./slices";

const persistMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);

	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
