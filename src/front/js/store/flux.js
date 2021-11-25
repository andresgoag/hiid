import { userModel } from "../utils/userModel.js";

// const URL_API = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userModel: userModel
		},
		actions: {
			setUserModel: data => {
				const store = getStore();
				const userModel = getStore().userModel;
				setStore({ ...store, userModel: { ...store.userModel, ...data } });
			},
			setUserProperty: (property, value) => {
				const store = getStore();
				setStore({ ...store, userModel: { ...store.userModel, [property]: value } });
			},
			saveUser: user => {
				fetch(`${process.env.BACKEND_URL}/save_user`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user)
				})
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(data => console.log(data))
					.catch(error => console.error("Error:", error));
			},
			getQr: () => {
				const data = { username: getStore().userModel.username };
				const datajson = JSON.stringify(data);

				console.log(data);
				console.log(datajson);

				fetch(`${process.env.BACKEND_URL}/get_qr`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: datajson
				})
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(data => {
						console.log(data);
						if (data.message == "ok") {
							return "created";
						}
					})
					.catch(error => console.error("Error:", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
