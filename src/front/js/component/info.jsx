import React from "react";
import { Context } from "../store/appContext";
import { Input } from "./input.jsx";
import { infoInputs } from "../utils/infoInputs.js";

export const Info = () => {
	const { store, actions } = React.useContext(Context);

	const handleInput = ev => {
		const input = ev.currentTarget;
		actions.setUserProperty(input.name, input.value);
	};

	const updateUser = user => {
		fetch(`${process.env.BACKEND_URL}/update_user`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else if (response.status == 400) {
					return response.json();
				} else {
					return new Error("Error fetching the api");
				}
			})
			.then(data => {
				if (data.status) {
					actions.setUserModel(data.user);
					alert("User updated succesfully");
				} else {
					return alert(data.message);
				}
			})
			.catch(error => console.error("Error:", error));
	};

	return (
		<div>
			{infoInputs.map((item, index) => (
				<Input
					key={index}
					type={item.type}
					label={item.label}
					icon={item.icon}
					name={item.name}
					description={item.description}
					value={store.userModel[item.name]}
					handler={handleInput}
				/>
			))}
			<button
				className="primary-button"
				onClick={() => {
					updateUser(store.userModel);
				}}>
				Save
			</button>
		</div>
	);
};
