import { userModel } from "../utils/userModel.js";
import { useHistory } from "react-router-dom";

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
			}
		}
	};
};

export default getState;
