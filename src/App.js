import {Stepper} from './Components/Stepper';
import {formInputs} from './inputs';

import './App.css';

function App() {
	return <div className='container'>
		<Stepper formInputs={formInputs}/>
	</div>
}

export default App;

