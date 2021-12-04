import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login.jsx";
import { Register } from "./pages/register.jsx";
import { Info } from "./component/info.jsx";
import { Landing } from "./pages/landing.jsx";
import { Stats } from "./component/stats.jsx";
import { Dashboard } from "./pages/dashboard.jsx";
import { Share } from "./pages/share.jsx";
import { Directory } from "./pages/directory.jsx";
import injectContext from "./store/appContext";
import { Dash } from "./pages/dash.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/login">
							<Login />
						</Route>

						<Route exact path="/register">
							<Register />
						</Route>

						<Route exact path="/dashboard">
							<Dash />
						</Route>

						<Route exact path="/graph">
							<Stats />
						</Route>

						<Route exact path="/share">
							<Share />
						</Route>

						<Route exact path="/directory">
							<Directory />
						</Route>

						<Route exact path="/:username">
							<Landing />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
