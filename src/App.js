
import './App.css';
import React , { useState } from 'react';
import Texto from './texto.jsx';
export default function App() {
       const [cities, setCities]=useState("Pide Tu Consejo");
      const [sumas, lassumas]=useState(1);
      function funcionn(){
        onSearch();
        suma();
         console.log(suma());
        
      }
      function suma(){
       lassumas(sumas+1);
      
       return sumas;
      }
      function onSearch(ciudad) {
        
      fetch(`https://some-random-api.ml/joke`)
      .then(r => r.json())
      .then((recurso) => {
        var k=recurso.id;
        var p=0
        
        const ciudad = {
          joke : recurso.joke
          
        };
        console.log(ciudad.joke);
        
        setCities(recurso.joke);
        console.log(cities);

      });
      return cities;


    }
  return (
    <div className="App">
      <header className="App-header">
      <div >
        
        <Texto suma={suma} sumas={sumas} funcionn={funcionn} cities={cities} onSearch={onSearch}/></div>
      
      </header>
    </div>
  );
}

