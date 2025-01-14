import React from "react";
import "../css/Boton.css";

const Boton = (props) => {
  return <button className="boton" onClick={props.onClick}>{props.texto}</button>;
};

export default Boton;