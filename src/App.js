import './App.css';
import Centro from './components/centro';
import LateralDerecho from './components/lateralderecho';
import LateralIzquierdo from './components/lateralizquierdo';


function App() {
  return (
    <div className="App">

      <LateralIzquierdo />

      <Centro />

      <LateralDerecho />

    </div>
  );
}

export default App;
