// Write your Character component here
import React from 'react';
export default function Character(props){
    const {character} = props;
    return (
    <div>
       <h1>{character.name}</h1> 
    </div>
    )
}