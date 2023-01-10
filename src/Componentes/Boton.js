import React from "react";
import '../Styles/Boton.css';


function Boton (props) {

    /* Definir funcion */
    const esOperador = valor => {
        /* Comprobar si no es un numero o un punto o = 
        Comprobar que sea extrictamente un operador */
        return isNaN(valor) && (valor !== ".") && (valor !== "=");
    };

    return (
        <div
        /* Deternimar si props.children es operador sino es null
        trimEnd = remueve espacios al final de la linea para no mostrar nad asi es null */
        className={`boton-container ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
        /* manejarClick es una funcion nueva/anonima que se llama */
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;