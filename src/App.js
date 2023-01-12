import "./App.css";
import store from "./store/index.js";
import Slava from "./slava.js";
import Cashier from "./cashier.js";

function App() {
	return (
		<div className="App">
			<Cashier></Cashier>
			{store.getState().slavaSwitch ? <Slava /> : null}
		</div>
	);
}

export default App;
