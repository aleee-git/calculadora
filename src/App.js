import './App.css';
import logo from './Images/logo-cat.webp';
import Boton from './Componentes/Boton';

function App() {
  return (
    <div className="App">

      <div className="logo-container">
        <img
        src={logo}
        className="logo"
        alt="Logo-gatito"/>
      </div>

      <br/> <br/>
      <div className="calculadora-container">
        <div className="fila">
          {/* 1 es el valor de {props.children} */}
          <Boton>1</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>

    </div>
  );
}

export default App;
