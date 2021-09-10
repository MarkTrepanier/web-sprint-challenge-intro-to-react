import React from 'react';
import Character from './Character'
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width 100%;
`
export default function Characters(props){
    const {data}= props;
    return (
        <ContainerStyle>
            {
            data.map(character=>{
                return (
                    <Character character={character} key={character.name}></Character>
                )
            })
            }
        </ContainerStyle>
    )
}