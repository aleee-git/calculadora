import React from "react";
import '../Styles/Clear.css';

/* Funcion como constante flecha */
const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear;
