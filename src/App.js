import './App.css';
import {Stepper} from "./Components/Stepper";
import {formInputs} from "./inputs";





function App() {
	return <div className='container'>
		<Stepper formInputs={formInputs}/>
	</div>
}

export default App;

