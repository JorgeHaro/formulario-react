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
      <Titulo label="Formulario en React 2025" />
      <Campo label="Nombres" onChange={(valor) => handleChange('nombres', valor)} />
      <Campo label="Apellidos" onChange={(valor) => handleChange('apellidos', valor)} />
      <Campo label="Tipo de Documento" onChange={(valor) => handleChange('tipoDocumento', valor)} />
      <Campo label="Nro. de Documento" onChange={(valor) => handleChange('nroDocumento', valor)} />
      <Campo label="Nro. teléfono" onChange={(valor) => handleChange('telefono', valor)} />
      <Campo label="Correo electrónico (email)" onChange={(valor) => handleChange('correo', valor)} />
      <Boton texto="Registrar" onClick = {handleSubmit} />
    </div>
  );
}

export default App;

