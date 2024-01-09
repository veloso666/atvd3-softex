// src/App.jsx

import React from 'react';
import ListaDeletarComponente from './componentes/ListaDeletarComponente';
import CriarAtualizarComponente from './componentes/CriarAtualizarComponente';

function App() {
  return (
    <div className="App">
      <ListaDeletarComponente />
      <CriarAtualizarComponente />
    </div>
  );
}

export default App;
