import './App.css';
import React, { useState } from 'react';
import Boton from './componentes/Boton';
import Campo from './componentes/Campo';
import Titulo from './componentes/Titulo';

function App() {
  const [formulario, setFormulario] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    nroDocumento: '',
    telefono: '',
    correo: ''
  });

  const handleChange = (campo, valor) => {
    setFormulario({ ...formulario, [campo]: valor });
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(formulario, null, 2));
  };  

  return (
    <div className="App">
      <Titulo label="formularia de en React 1025" />
      <Campo label="nombre genericaa" onChange={(valor) => handleChange('nombres', valor)} />
      <Campo label="surnem" onChange={(valor) => handleChange('apellidos', valor)} />
      <Campo label="Tipo de docs" onChange={(valor) => handleChange('tipoDocumento', valor)} />
      <Campo label="Nro. de docmentosss" onChange={(valor) => handleChange('nroDocumento', valor)} />
      <Campo label="Nro. celular" onChange={(valor) => handleChange('telefono', valor)} />
      <Campo label="Correo elctro" onChange={(valor) => handleChange('correo', valor)} />
      <Boton texto="registrar 123" onClick = {handleSubmit} />
    </div>
  );
}

export default App;

