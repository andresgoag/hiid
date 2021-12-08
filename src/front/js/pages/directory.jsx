import React from "react";
import { MiniView } from "../component/miniview.jsx";
import "../../styles/directory.scss";

export const Directory = () => {
	const [allUsers, setAllUsers] = React.useState([]);
	const [users, setUsers] = React.useState([]);
	const [sector, setSector] = React.useState("");
	const [zip, setZip] = React.useState("");

	React.useEffect(() => {
		fetch(`${process.env.BACKEND_URL}/allusers`)
			.then(response => response.json())
			.then(data => {
				setAllUsers(data);
				setUsers(data);
			})
			.catch(error => console.error(error));
	}, []);

	React.useEffect(
		() => {
			const filteredUsers = allUsers.filter(user => user.sector.includes(sector) && user.zip_code.includes(zip));
			setUsers(filteredUsers);
		},
		[sector, zip]
	);

	return (
		<div className="directory">
			<figure className="header-logo">
				<img src="https://gghtec.com/wp-content/uploads/2021/12/Hiid.svg" alt="" />
			</figure>

			<div className="directory-content">
				<p className="directory-title">Find experts in every discipline</p>

				<div className="filters">
					<label className="hidden" />
					<div className="input__form">
						<input
							type="string"
							id="sector"
							name="sector"
							placeholder="Try: “engineering”"
							value={sector}
							onChange={ev => setSector(ev.target.value)}
						/>
					</div>
					<div className="input__form">
						<input
							type="string"
							id="zip"
							name="zip"
							placeholder="Filter by: Zip code"
							value={zip}
							onChange={ev => setZip(ev.target.value)}
						/>
					</div>
				</div>

				<p className="results-title">Results</p>
				<div className="results">
					{users.map((user, index) => (
						<MiniView key={`users${index}`} {...user} />
					))}
				</div>
			</div>
		</div>
	);
};
