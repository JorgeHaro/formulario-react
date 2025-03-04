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
      <Titulo label="formmm en React 2027" />
      <Campo label="Nombras" onChange={(valor) => handleChange('nombres', valor)} />
      <Campo label="Apellidos" onChange={(valor) => handleChange('apellidos', valor)} />
      <Campo label="Tipo de docUMNE" onChange={(valor) => handleChange('tipoDocumento', valor)} />
      <Campo label="Nro. de Documentos" onChange={(valor) => handleChange('nroDocumento', valor)} />
      <Campo label="Nro. celular" onChange={(valor) => handleChange('telefono', valor)} />
      <Campo label="Correo elctro" onChange={(valor) => handleChange('correo', valor)} />
      <Boton texto="Enviar" onClick = {handleSubmit} />
    </div>
  );
}

export default App;

