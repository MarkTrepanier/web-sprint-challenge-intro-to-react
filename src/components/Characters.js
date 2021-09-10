import React from 'react';
import Character from './Character'
import styled from 'styled-components';

//styles for character list container
const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width 100%;
`
//map character data to container
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