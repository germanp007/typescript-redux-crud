import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../../hooks/useActions";
const CreateNewUser = () => {
	const [result, setResult] = useState<"ok" | "ko" | null>(null);
	const { addUser } = useUserActions();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult(null);
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			form.reset();
			return setResult("ko");
		}
		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>
			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="name" />
				<TextInput name="email" placeholder="email" />
				<TextInput name="github" placeholder="github user" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Create User
					</Button>
					<span>{result === "ok" && <Badge>User added</Badge>}</span>
					<span>{result === "ko" && <Badge>Invalid user</Badge>}</span>
				</div>
			</form>
		</Card>
	);
};

export default CreateNewUser;
