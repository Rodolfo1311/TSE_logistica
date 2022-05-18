import React, { useState } from 'react';
import axios from 'axios';
import Mapa from './Mapa';


const App = ()=>{

  const [origen, setOrigen] = useState('')
  const [destino, setDestino] = useState('')
   var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origen}&destinations=${destino}&units=imperial&key=AIzaSyB-RhklFOwT4P9EVEt4wcvILLpEBJ1uTq8`,
    headers: { }
  };
  

  const consultar = () => {
    const origen = document.getElementById('origen').value
    const destino = document.getElementById('destino').value
    setOrigen(origen)
    setDestino(destino)
    buscar()
  }

  const buscar = () => {
    axios(config)
    .then(function (response) {
      var elemento = document.getElementById('tiempo')
      elemento.value = (JSON.stringify(response.data.rows[0].elements[0].duration.text))
      console.log(elemento.value) 
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return(
    <>
      <label >origen</label>
      <input placeholder='ingresa origen' id='origen'></input>
      <br/>
      <label >destino</label>
      <input placeholder='ingresa destino' id='destino'></input>
      <br/>
      <br/>
      <button onClick={consultar}>buscar</button>
      <br/>
      <br/>
      <label >timepo aproximado</label>
      <input id='tiempo'></input>
      <Mapa/>
    </>
  )

}

export default App;
