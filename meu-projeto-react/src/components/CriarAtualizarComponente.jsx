// src/componentes/CriarAtualizarComponente.jsx

import React, { useState } from 'react';
import axios from 'axios';

const CriarAtualizarComponente = () => {
  const [novoDado, setNovoDado] = useState('');

  const handleCriarAtualizar = async () => {
    try {
    
      await axios.post('http://localhost:3001/dados', { nome: novoDado }); 
            setNovoDado('');
    } catch (error) {
      console.error('Erro ao criar/atualizar dado na API', error);
    }
  };

  return (
    <div>
      <h1>Criar/Atualizar Dados</h1>
      <input type="text" value={novoDado} onChange={(e) => setNovoDado(e.target.value)} />
      <button onClick={handleCriarAtualizar}>Criar/Atualizar</button>
    </div>
  );
};

export default CriarAtualizarComponente;
