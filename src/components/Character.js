// Write your Character component here
import React from 'react';
import styled from 'styled-components';

//styles
const CharacterStyle = styled.div`
    color: ${pr=>pr.theme.primary};
    width: 25%;
    border:thick solid ${pr=>pr.theme.primary};
    background-color: ${pr=>pr.theme.black};
    border-radius: 25px;
    h1{
        color:${pr=>pr.theme.primary};
    }
`

//character data
export default function Character(props){
    const {character} = props;
    return (
    <CharacterStyle >
       <h1>{character.name}</h1> 
    </CharacterStyle>
    )
}