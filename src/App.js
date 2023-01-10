import './App.css';
import logo from './Images/logo-cat.webp';
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import Clear from './Componentes/Clear';

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
        <Pantalla/>

        {/* 1, 2, 3 es el valor de {props.children} */}
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>

        <div className="fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>

        <div className="fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>

        <div className="fila">
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>

        <div className="fila">
        <Clear>Clear</Clear>
        </div>

      </div>

    </div>
  );
}

export default App;
