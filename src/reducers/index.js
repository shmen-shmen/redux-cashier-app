const reducer = (state, action) => {
	switch (action.type) {
		case "TYPING_DONATION_AMOUNT":
			return { ...state, donation: action.payload.donation };
		case "SUBMITTING_DONATION":
			return {
				...state,
				donation: action.payload.donation,
				capital: action.payload.capital,
				allDonations: action.payload.allDonations,
				slavaSwitch: action.payload.slavaSwitch,
			};
		case "SWITCHING_SLAVA_VISIBILITY":
			return { ...state, slavaSwitch: action.slavaSwitch };
		default:
			return state;
	}
};

export default reducer;
