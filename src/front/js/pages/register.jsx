import React from "react";
import "../../styles/login.scss";
import { Input } from "../component/input.jsx";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
	const history = useHistory();
	const { store, actions } = React.useContext(Context);
	const [user, setUser] = React.useState({ email: "", password: "", passwordVerify: "" });

	const handleInput = ev => {
		const input = ev.currentTarget;
		setUser({ ...user, [input.name]: input.value });
	};

	const saveUser = () => {
		if (user.email != "" && user.password === user.passwordVerify) {
			const newData = {
				email: user.email,
				password: user.password
			};
			let user = { ...store.userModel, ...newData };
			user.username = `${user.email}${Date.now()}`;
			fetch(`${process.env.BACKEND_URL}/save_user`, {
				method: "POST",
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
						history.push("/dashboard");
					} else {
						return alert(data.message);
					}
				})
				.catch(error => console.error("Error:", error));
		} else {
			alert("Passwords do not match");
		}
	};

	return (
		<div>
			<figure className="background">
				<img src="https://m-lp.com/wp-content/uploads/2021/11/FloatingCardsGrey.png" alt="" />
			</figure>

			<figure className="logo">
				<img src="https://m-lp.com/wp-content/uploads/2021/11/Hiidlogo.png" alt="" />
			</figure>

			<div className="slogan-container">
				<div className="slogan-subcontainer">
					<p className="slogan">Start your journey with Hiid and network like a pro</p>
					<p className="crear_cuenta_desktop">
						Already a member?
						<Link to="/login"> Login</Link>
					</p>
				</div>
			</div>

			<div className="form-container">
				<form className="form" action="">
					<Input
						type="text"
						label="your email"
						icon=""
						name="email"
						description=""
						value={user.email}
						handler={handleInput}
					/>
					<Input
						type="password"
						label="create password"
						icon="bi bi-eye-fill"
						name="password"
						description=""
						value={user.password}
						handler={handleInput}
					/>
					<Input
						type="password"
						label="re-enter password"
						icon="bi bi-eye-fill"
						name="passwordVerify"
						description=""
						value={user.passwordVerify}
						handler={handleInput}
					/>

					<input type="button" className="primary-button" value="Create account" onClick={saveUser} />

					<label className="form__custom-checkbox" htmlFor="acepto-terminos">
						<input type="checkbox" id="acepto-terminos" name="acepto-terminos" value="acepto-terminos" />
						<span className="checkmark" />
						<p className="links_terminos">
							I agree with the terms and conditions and the privacy policy of this website.
						</p>
					</label>
				</form>
			</div>

			<p className="crear_cuenta">
				Already a member?
				<Link to="/login"> Login</Link>
			</p>
		</div>
	);
};
