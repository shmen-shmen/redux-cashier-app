import store from "./store";

const Cashier = (props) => {
	const { capital, donation, allDonations } = store.getState();
	const dispatchInputAction = (e) => {
		return store.dispatch({
			type: "TYPING_DONATION_AMOUNT",
			payload: {
				donation: e.target.value,
			},
		});
	};

	const dispatchSubmitAction = (e) => {
		e.preventDefault();
		if (donation > 0) {
			return store.dispatch({
				type: "SUBMITTING_DONATION",
				payload: {
					capital: capital - donation,
					allDonations: parseFloat(allDonations) + parseFloat(donation),
					donation: "",
					slavaSwitch: true,
				},
			});
		} else {
			e.target.style.border = "2px solid red";
			e.target.textContent = "ONLY HRYVNA!";
			setTimeout(() => {
				e.target.style.border = "";
				e.target.textContent = "donate to ZSU";
			}, 2000);
			return store.dispatch({
				type: "TYPING_DONATION_AMOUNT",
				payload: {
					donation: "",
				},
			});
		}
	};

	return (
		<div className="white-text cashier-interface">
			<div className="face"></div>
			<h1>Hello, Pan Poroshenko!</h1>
			<div>
				<h2>you have {capital} hryvna</h2>
				<form>
					<input
						type="text"
						value={donation}
						placeholder={"VSE NA ZSU"}
						onChange={dispatchInputAction}
					/>
					<button onClick={dispatchSubmitAction}>donate to ZSU</button>
				</form>
			</div>
		</div>
	);
};

export default Cashier;
