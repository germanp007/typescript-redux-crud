import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;
export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithID extends User {
	id: UserId;
}

const DEFAULT_INITIAL_STATE: UserWithID[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "doepeter@gmail.com",
		github: "peterdoemst",
	},
	{
		id: "2",
		name: "German Pinto",
		email: "pintogerman281@gmail.com",
		github: "germanp007",
	},
	{
		id: "3",
		name: "Jonas Schemedtmann",
		email: "jonasschmedtmann@yahoo.net",
		github: "jonasschmedtmann",
	},
	{
		id: "4",
		name: "Fernando Herrera",
		email: "Klerith@hotmail.com",
		github: "Klerith",
	},
	{
		id: "5",
		name: "Corey Butler",
		email: "coreybutler@gmail.com",
		github: "coreybutler",
	},
	{
		id: "6",
		name: "Tim Biles",
		email: "timbiles@hotmail.com",
		github: "timbiles",
	},
];

const initialState: UserWithID[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	if (persistedState) return JSON.parse(persistedState).users;
	return DEFAULT_INITIAL_STATE;
})();

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserByID: (state, action: PayloadAction<UserId>) => {
			return state.filter((ele) => ele.id !== action.payload);
		},
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();

			return [
				...state,
				{
					id,
					...action.payload,
				},
			];
		},
	},
});

export default userSlice.reducer;
export const { deleteUserByID, addNewUser } = userSlice.actions;
