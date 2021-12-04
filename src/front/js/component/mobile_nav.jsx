import React from "react";

export const MobileNav = () => {
	return (
		<nav className="mobile-dashboard__navigation">
			<ul className="mobile-navigation-list">
				<li>
					<i className="fas fa-home" />
				</li>
				<li>
					<i className="fas fa-address-card" />
				</li>
				<li>
					<i className="fas fa-share" />
				</li>
				<li>
					<i className="fas fa-search" />
				</li>
			</ul>
			<div className="mobile-logout">
				<i className="fas fa-sign-out-alt" />
			</div>
		</nav>
	);
};
