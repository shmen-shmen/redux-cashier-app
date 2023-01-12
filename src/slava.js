import { useEffect } from "react";
import store from "./store";

const Slava = () => {
	const { allDonations } = store.getState();

	useEffect(() => {
		setTimeout(() => {
			return store.dispatch({
				type: "SWITCHING_SLAVA_VISIBILITY",
				payload: {
					slavaSwitch: false,
				},
			});
		}, 5000);
	});

	return (
		<div className="slava">
			<h1>SLAVA UKRAINI!!!</h1>
			<h2>you have donated {allDonations} hrivna</h2>
		</div>
	);
};

export default Slava;
