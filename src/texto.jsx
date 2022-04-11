import React , { useState } from 'react';
import iconn from './iconn.svg';
import icon from './icon.svg';
import './App.css'
export default function Texto({cities,funcionn,sumas,suma}) {
 
    return (
      <div className="container">
      <p >
        CONSEJO --><span>{sumas}</span>  
       </p>
      <h1>{cities}</h1>
        <img className="raya" src={iconn} alt="" />
      <button  className="dado"
       type="button"
       onClick={funcionn}
     ><img className="dado2" src={icon} alt=""></img>
     </button>
        </div>
    );
  }







