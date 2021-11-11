import React, { useContext } from "react";
import "../../styles/login.scss";
import { Input } from "../component/input.jsx";
// import { Context } from "../store/appContext";

export const Login = () => {
	// const { store, actions } = useContext(Context);

	const [user, setUser] = React.useState({ email: "", password: "" });

	const handleInput = ev => {
		const input = ev.currentTarget;
		setUser({ ...user, [input.name]: input.value });
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
						Not a member? <a href="#">Create an account</a>
					</p>
				</div>
			</div>

			<div className="form-container">
				<form className="form" action="">
					<Input type="text" label="email" icon="" description="" value={user.email} handler={handleInput} />
					<Input
						type="password"
						label="password"
						icon="bi bi-eye-fill"
						description=""
						value={user.password}
						handler={handleInput}
					/>

					<input type="button" className="form__submit" value="Entrar" />

					<label className="form__custom-checkbox" htmlFor="mantener_sesion">
						<input type="checkbox" id="mantener_sesion" name="mantener_sesion" value="mantener_sesion" />
						<span className="checkmark" />
						<p>Keep me logged in</p>
					</label>
				</form>
			</div>

			<p className="crear_cuenta">
				Not a member? <a href="#">Create an account</a>
			</p>
		</div>
	);
};
