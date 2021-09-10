import React, {useState, useEffect}from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Characters from './components/Characters';

//styles
const H1Style = styled.h1`
  width: 45%;
  color: ${pr=>pr.theme.primary};
  border:thick solid ${pr=>pr.theme.primary};
  background-color: ${pr=>pr.theme.black};
  border-radius: 25px;
`

const AppStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
`
//App
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
    <AppStyle className="App">
      <H1Style className="Header">{data.length === 0 ? 'Loading' : 'Characters'}</H1Style>
      {data.length === 0 ? <p>''</p> : <Characters data={data}/>}
    </AppStyle>
  );
}

export default App;
