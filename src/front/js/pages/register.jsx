import React from "react";
import "../../styles/login.scss";
import { Input } from "../component/input.jsx";
import { Link } from "react-router-dom";

export const Register = () => {
	const [user, setUser] = React.useState({ email: "", password: "", passwordVerify: "" });

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
						name="password"
						description=""
						value={user.password}
						handler={handleInput}
					/>

					<input type="submit" className="form__submit" value="Create account" />

					<label className="form__custom-checkbox" htmlFor="acepto-terminos">
						<input type="checkbox" id="acepto-terminos" name="acepto-terminos" value="acepto-terminos" />
						<span className="checkmark" />
						<p className="links_terminos">
							I agree with the terms and conditions and with the privacy policy of this website.
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
