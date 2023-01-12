import reducer from "../reducers";
import { legacy_createStore } from "redux";

const initialState = {
	capital: 1000,
	donation: "",
	allDonations: 0,
	slavaSwitch: false,
	slavaTimeout: null,
};

const store = legacy_createStore(reducer, initialState);

export default store;
