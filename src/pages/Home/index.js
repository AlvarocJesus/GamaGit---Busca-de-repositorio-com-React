import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import * as S from './styled';
import './styles.css';

function Home(props) {
  const history = useHistory();

  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(res => {
        const repositories = res.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repository.push(repository.name)
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Usuário não encontrado</S.ErrorMsg> : '' }
      
    </S.HomeContainer>
  );
}

export default Home;
