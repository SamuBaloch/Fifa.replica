import "./style.css";
import React from "react";

import {useState} from "react";
function Top() {
  const[card,setcard]= useState([
    {picture:"https://digitalhub.fifa.com/transform/fc24b6c5-484e-48d2-ba22-40cee638d92f/STARA-PAZOVA-SERBIA-APRIL-12-The-players-of-Serbia-celebrate-the-victory-during-the-FIFA-Women-s-World-Cup-2023-Qualifier-group-H-match-between-Serbia-and-Germany-at-on-April-12-2022-in-Stara-Pazova-Serbia-Photo-by-Nikola-Krstic-MB-Media-Getty-Images?io=transform:fill,aspectratio:16x9,width:404&quality=100",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"14 Nov 2022"}
  ,{picture:"https://digitalhub.fifa.com/transform/75223765-8827-4d30-b9ae-55089e256bfe/WOMEN-S-FOOTBALL-DEVELOPMENT?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"14 Nov 2022"}
  ,{picture:"https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"15Nov 2022"} 
 
   
  ])


  
    return (
        <div style={{display:"inline-block",backgroundColor:" rgb(15, 133, 162)",height:0,marginTop:"10px",position:"relative",}}>

  
 <div className="row">
  <div className="col-1">

  </div>
<div className="col-10">
 

 
{card.map((item)=>
(


<div className="card ms-3 mt-3" style={{backgroundColor:"white"}} >
<img className="card-img-top"   src={item.picture} alt="Card  cap"/>
<div className="card-body">
    <p className="card-text" style={{fontFamily:"serif"}}>{item.title}</p>
    <h2 style={{marginLeft:"8%" ,fontFamily:"Serif", fontSize:"15px" }}>{item.description}</h2>
    <h3 style={{marginLeft:"8%"}}>{item.date}</h3>
  </div> 
</div>
))
}
</div>
</div>


</div>

  
        
      );
}

export default Top;