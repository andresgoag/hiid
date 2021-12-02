import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Preview } from "../component/preview.jsx";
import "../../styles/landing.scss";

export const Landing = () => {
	const { actions } = React.useContext(Context);
	const params = useParams();

	React.useEffect(() => {
		fetch(`${process.env.BACKEND_URL}/get_user/${params.username}`)
			.then(response => response.json())
			.then(data => actions.setUserModel(data))
			.catch(error => console.error(error));
	}, []);

	return <Preview />;
};
