import React, { useState } from 'react';
import axios from 'axios';

import * from './styled';
import './styles.css';

function Home(props) {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(res => console.log(res.data));
  }

  return (

    <Container>
      <Input className="usuarioInput" placeholder="usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <Button type="button" onClick={handlePesquisa}>Pesquisar</Button>
    </Container>
  );
}

export default Home;
