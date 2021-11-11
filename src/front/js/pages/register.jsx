import React from "react";
import "../../styles/login.scss";
import { Input } from "../component/input.jsx";
import { Link } from "react-router-dom";

export const Register = () => {
	const [user, setUser] = React.useState({ email: "", password: "", passwordVerify: "" });
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
					<Input type="text" label="email" icon="" description="" value={user.email} handler={handleInput} />
					<Input
						type="password"
						label="password"
						icon="bi bi-eye-fill"
						description=""
						value={user.password}
						handler={handleInput}
					/>

					<label htmlFor="input-email" className="hidden">
						Tu email
					</label>
					<input
						type="text"
						className="form__input"
						id="input-email"
						name="input-email"
						placeholder="Tu email"
						required
					/>

					<div className="password-input">
						<label htmlFor="input-password" className="hidden">
							Contraseña
						</label>
						<input
							type="password"
							className="form__input"
							id="input-password"
							name="input-password"
							placeholder="Crea una contraseña"
							required
						/>
						<a className="eye-icon" />
					</div>

					<div className="password-input">
						<label htmlFor="input-password-repeat" className="hidden">
							Repite contraseña
						</label>
						<input
							type="password"
							className="form__input"
							id="input-password-repeat"
							name="input-password-repeat"
							placeholder="Verifica tu contraseña"
							required
						/>
						<a className="eye-icon" />
					</div>

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
