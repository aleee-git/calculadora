import './App.css';
import logo from './Images/logo-cat.webp';

function App() {
  return (
    <div className="App">

      <div className="logo-container">
        <img
        src={logo}
        className="logo"
        alt="Logo-gatito"/>
      </div>

      <div className="calculadora-container">
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>

    </div>
  );
}

export default App;
