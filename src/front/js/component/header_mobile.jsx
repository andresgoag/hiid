import React from "react";
import { PropTypes } from "prop-types";

export const HeaderMobile = props => {
	return (
		<header className="mobile-dashboard__header">
			<figure className="header-logo">
				<img src="https://m-lp.com/wp-content/uploads/2021/11/Hiidlogo.png" alt="" />
			</figure>
			<div className="mobile-header-rightside">
				<button onClick={props.toggleNav}>
					<i className="fas fa-bars" />
				</button>
				<figure>
					<img src="https://gghtec.com/wp-content/uploads/2021/12/ProfHiid.png" alt="" />
				</figure>
			</div>
		</header>
	);
};

HeaderMobile.propTypes = {
	toggleNav: PropTypes.func
};
