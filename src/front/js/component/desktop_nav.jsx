import React from "react";
import { Link } from "react-router-dom";

export const DesktopNav = () => {
	return (
		<aside className="leftside">
			<div className="top">
				<figure className="header-logo">
					<img src="https://gghtec.com/wp-content/uploads/2021/12/HiidWhite.svg" alt="" />
				</figure>
				<nav>
					<ul className="navigation-list">
						<Link to="/dashboard">
							<li>
								<i className="fas fa-home" />
								<span>Dashboard</span>
							</li>
						</Link>
						<Link to="/myhiid">
							<li>
								<i className="fas fa-address-card" />
								<span>My Hiid</span>
							</li>
						</Link>
						<Link to="/share">
							<li>
								<i className="fas fa-share" />
								<span>Share</span>
							</li>
						</Link>
						<Link to="/directory">
							<li>
								<i className="fas fa-search" />
								<span>Search</span>
							</li>
						</Link>
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
