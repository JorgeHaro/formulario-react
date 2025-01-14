import React from "react";
import "../css/Campo.css";

function Campo(props) {
  const handleInputChange = (e) => {
    props.onChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="contenedor-campo">
      <label>{props.label}</label>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default Campo;

