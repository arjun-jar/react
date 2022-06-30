 import React from 'react'
import Erorrr from './Erorrr';
 
 function Heros({heroName}) {
if(heroName ==='joker'){
  throw new Erorrr('joker is not hero');
}
   return (
    <> 
    
    <h1>{heroName}</h1> 
    </>
   
   )
 }
 
 export default Heros