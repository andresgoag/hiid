import React, { useContext } from "react";
import "../../styles/login.scss";
import { Input } from "../component/input.jsx";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const history = useHistory();
	const { actions } = React.useContext(Context);
	const [user, setUser] = React.useState({ email: "", password: "" });

	const handleInput = ev => {
		const input = ev.currentTarget;
		setUser({ ...user, [input.name]: input.value });
	};

	const loginUser = () => {
		if (user.email != "" && user.password != "") {
			const newData = {
				email: user.email,
				password: user.password
			};

			fetch(`${process.env.BACKEND_URL}/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newData)
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
			alert("Blank fields not allowed");
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
					<p className="slogan">Connect with your customers like never before</p>
					<p className="crear_cuenta_desktop">
						Not a member?
						<Link to="/register"> Create an account</Link>
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
						label="password"
						icon="bi bi-eye-fill"
						name="password"
						description=""
						value={user.password}
						handler={handleInput}
					/>

					<input type="button" className="primary-button" value="Log in" onClick={loginUser} />

					<label className="form__custom-checkbox" htmlFor="mantener_sesion">
						<input type="checkbox" id="mantener_sesion" name="mantener_sesion" value="mantener_sesion" />
						<span className="checkmark" />
						<p>Keep me logged in</p>
					</label>
				</form>
			</div>

			<p className="crear_cuenta">
				Not a member? <Link to="/register"> Create an account</Link>
			</p>
		</div>
	);
};
