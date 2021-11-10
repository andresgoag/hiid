import React, { useContext } from "react";
// import { Context } from "../store/appContext";

export const Login = () => {
	// const { store, actions } = useContext(Context);

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
					<p className="slogan">Conéctate como nunca con tus clientes</p>
					<p className="crear_cuenta_desktop">
						¿Aún no eres miembro? <a href="#">Crea una cuenta</a>
					</p>
				</div>
			</div>

			<div className="form-container">
				<form className="form" action="">
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
							placeholder="Contraseña"
							required
						/>
						<a className="eye-icon" />
					</div>

					<input type="submit" className="form__submit" value="Entrar" />

					<label className="form__custom-checkbox" htmlFor="mantener_sesion">
						<input type="checkbox" id="mantener_sesion" name="mantener_sesion" value="mantener_sesion" />
						<span className="checkmark" />
						<p>Mantener sesión iniciada</p>
					</label>
				</form>
			</div>

			<p className="crear_cuenta">
				¿Aún no eres miembro? <a href="#">Crea una cuenta</a>
			</p>
		</div>
	);
};
