import React, {useState, useEffect}from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Characters from './components/Characters';

const App = () => {
  const [data, setData] = useState([]);

   useEffect(()=>{
     Axios.get(`https://swapi.dev/api/people`)
     .then(res=>{
       console.log(res.data);
       setData(res.data);
     })
     .catch(er=>console.log(er));
   },[])
     
  return (
    <div className="App">
      <h1 className="Header">{data.length === 0 ? 'Loading' : 'Characters'}</h1>
      {data.length === 0 ? <p>''</p> : <Characters data={data}/>}
    </div>
  );
}

export default App;
