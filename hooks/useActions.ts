import { useDispatch } from "react-redux";
import { UserId, addNewUser, deleteUserByID, User } from "../src/store/slices";
import { AppDispatch } from "../src/store/store";

export const useUserActions = () => {
	const dispatch: AppDispatch = useDispatch();

	const addUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	};
	const handleDeleteUser = (id: UserId) => {
		dispatch(deleteUserByID(id));
	};

	return {
		handleDeleteUser,
		addUser,
	};
};
