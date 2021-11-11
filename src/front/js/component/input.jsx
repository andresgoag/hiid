import React from "react";
import { PropTypes } from "prop-types";
import "../../styles/input.scss";

export const Input = props => {
	return (
		<div className="input__group">
			<label htmlFor={`input__${props.label}`} className="hidden">
				{props.label}
			</label>
			<div className="input__form">
				<input
					type={props.type}
					id={`${props.label}`}
					name={`${props.label}`}
					placeholder={props.label}
					value={props.value}
					required
					onChange={ev => props.handler(ev)}
				/>
				<i className={props.icon} />
			</div>
			<p className="input__description">{`${props.description}`}</p>
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.string,
	value: PropTypes.string,
	handler: PropTypes.func
};
