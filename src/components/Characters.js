import React from 'react';
import Character from './Character'

export default function Characters(props){
    const {data}= props;
    return (
        <div>
            {
            data.map(character=>{
                return (
                    <Character character={character}></Character>
                )
            })
            }
        </div>
    )
}