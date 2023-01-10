import React from "react";
import '../Styles/Clear.css';

/* Funcion como constante flecha */
const BotonClear = (props) => (
    <div className="boton-clear">
        {props.children}
    </div>
);

export default BotonClear;
