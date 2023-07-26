import CreateNewUser from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";
const App = (): JSX.Element => {
	return (
		<div
			style={{
				width: "80vw",
				margin: "auto",
			}}
		>
			<ListOfUsers />
			<CreateNewUser />
		</div>
	);
};

export default App;
