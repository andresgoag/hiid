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
				className="form__submit"
				onClick={() => {
					actions.saveUser(store.userModel);
				}}>
				Save
			</button>
		</div>
	);
};
