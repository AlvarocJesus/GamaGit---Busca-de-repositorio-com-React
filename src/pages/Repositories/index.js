import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

export default function Repositories(){
    const  history = useHistory();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else{
            history.push('/');
        }
        
    }, []);

    return (
        <S.Container>
            <S.Title>Repositorios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                    <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                }) }
            </S.List>
            <S.LinkHome to="/">VoltLinkr</S.LinkHome>
        </S.Container>
    );
}