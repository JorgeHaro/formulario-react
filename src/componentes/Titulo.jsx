import React from "react";
import "../css/Titulo.css";

function Titulo(props) {
    return (
      <div className="contenedor-titulo">
        <label>{props.label}</label>
      </div>
    );
}

export default Titulo;