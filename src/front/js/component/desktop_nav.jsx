import React from "react";

export const DesktopNav = () => {
	return (
		<aside className="leftside">
			<div className="top">
				<figure className="header-logo">
					<img src="https://gghtec.com/wp-content/uploads/2021/12/HiidWhite.svg" alt="" />
				</figure>
				<nav>
					<ul className="navigation-list">
						<li>
							<i className="fas fa-home" />
							<span>Dashboard</span>
						</li>
						<li>
							<i className="fas fa-address-card" />
							<span>My Hiid</span>
						</li>
						<li>
							<i className="fas fa-share" />
							<span>Share</span>
						</li>
						<li>
							<i className="fas fa-search" />
							<span>Search</span>
						</li>
					</ul>
				</nav>
			</div>
			<div className="logout">
				<i className="fas fa-sign-out-alt" />
				<span>Logout</span>
			</div>
		</aside>
	);
};
