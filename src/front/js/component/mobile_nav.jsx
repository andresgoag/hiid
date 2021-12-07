import React from "react";
import { Link } from "react-router-dom";

export const MobileNav = () => {
	return (
		<nav className="mobile-dashboard__navigation">
			<ul className="mobile-navigation-list">
				<Link to="/dashboard">
					<li>
						<i className="fas fa-home" />
					</li>
				</Link>
				<Link to="/myhiid">
					<li>
						<i className="fas fa-address-card" />
					</li>
				</Link>
				<Link to="/share">
					<li>
						<i className="fas fa-share" />
					</li>
				</Link>
				<Link to="/directory">
					<li>
						<i className="fas fa-search" />
					</li>
				</Link>
			</ul>
			<div className="mobile-logout">
				<i className="fas fa-sign-out-alt" />
			</div>
		</nav>
	);
};
