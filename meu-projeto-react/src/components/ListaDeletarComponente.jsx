// src/componentes/ListaDeletarComponente.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaDeletarComponente = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/dados');
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    fetchData();
  }, []);

  const handleDeletar = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/dados/${id}`); 
      setDados(dados.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao deletar dado da API', error);
    }
  };

  return (
    <div>
      <h1>Lista de Dados</h1>
      <ul>
        {dados.map((item) => (
          <li key={item.id}>
            {item.nome} 
            <button onClick={() => handleDeletar(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeletarComponente;
