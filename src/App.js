import './App.css';
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import Clear from './Componentes/Clear';
import { useState } from 'react';
/* Importar paquete para evaluaciones matematicas de mathjs
Instalar paquete con npm install mathjs */
import { evaluate } from 'mathjs';

function App() {

  /* Hook para input */
  const [input, setInput] = useState ("");

  /* Funcion para actualizar estado de input */
  const agregarInput = valor => {
    setInput (input + valor);
  };

  /* Funcion para calcular */
  const calcularResultado = () => {
    /* Condicionar para evitar errores, si el input no esta vacio hacer el calculo*/
    if (input) {
      setInput(evaluate(input));
    } else {
      alert ("Tía Paola por favor ingrese un número");
    }
  };

  return (
    <div className="App">

      <br/> <br/>
      <div className="calculadora-container">
        {/* Pasar el estado */}
        <Pantalla input={input}/>

        {/* 1, 2, 3 es el valor de {props.children} */}
        <div className="fila">
          {/* Agregar manejarClick={agregarInput} como prop en cada boton */}
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>

        <div className="fila">
        {/* manejarClear es una funcion anonima/vacia que reinicia el input en una cadena vacia
        Tambien puede ser otra manera de hacer manejarClick*/}
        <Clear manejarClear = {() => setInput("")}>
          Clear
        </Clear>
        </div>

      </div>

    </div>
  );
}

export default App;
