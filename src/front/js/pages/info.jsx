import React from "react";

export const Info = () => {
    const [user, setUser] = React.useState({ email: "", password: "" });

	const handleInput = ev => {
		const input = ev.currentTarget;
		setUser({ ...user, [input.name]: input.value });
	};

    return (
		<Input
						type="text"
						label="your email"
						icon=""
						name="email"
						description=""
						value={user.email}
						handler={handleInput}
					/>
    )
}