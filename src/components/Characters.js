import React from 'react';
import Character from './Character'

export default function Characters(props){
    const {data}= props;
    data.map(character=>{
        return (<Character character={character}></Character>)
    })
}