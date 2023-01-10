import React from "react";

function Boton (props) {

    /* Definir funcion */
    const esOperador = valor => {
        /* Comprobar si no es un numero o un punto o = 
        Comprobar que sea extrictamente un operador */
        return isNaN(valor) && (valor !== ".") && (valor !== "=");
    };

    return (
        <div
        /* Deternimar si props.children es operador sino es null*/
        className={`boton-container ${esOperador(props.children) ? "operador" : null}`}>
            {props.children}
        </div>
    );
}

export default Boton;