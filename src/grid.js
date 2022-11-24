import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu11';
import Top from './top';
import BottomSection from './bottomsection';
function Grid() {

  
    return ( 
    <div className='container'>

    <div class="row">
    <div class="col-12" style={{backgroundColor:"white",height:"30px"}}>
    <Menu/>
    </div>
    
    
    <div class="col-4" style={{backgroundColor:"white"}}>
    <div style={{display:"inline-block",backgroundColor:"white",height:230,width:300,position:"relative",marginTop:"100px",marginLeft:"5%"}}>
      <h1  >Football Unites the World</h1>
      <p > Football unites the world as a global movement to inspire, unite and develop through football.</p>
      <h2 >More from this topic</h2>
      </div>
    </div>
   <div class="col-8" style={{ marginTop:"70px",height:"700px",backgroundColor:" rgb(15, 133, 162)"}}> 
        <Top/>
   </div>
   
   <div class="col-4" style={{backgroundColor:"white",}}>
   <div >
<img src="data:image/jpeg;base64,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"alt="Logo" style={{width:"200px",height:"70px",marginTop:"70px",marginLeft:"50px"}} />
<br/>
<br/>







<h2 style={{marginLeft:"50px"}}>WORLD RAKING</h2>
<br/>
<p style={{marginLeft:"50px"}}>The official world ranking of <br/> international men and women <br/> teams.</p>
<br/>
<h6 style={{marginLeft:"50px",color:"blue"}}>FIFA/COCA-COLA WORLD <br/> RANKING</h6>
</div>
   </div>
   
    <div class="col-8" style={{backgroundColor:"white", }}><BottomSection/></div>
    
    <div class="col-12" style={{backgroundColor:"white", }}>
    
        <br></br>
    <div style={{height:"2px",backgroundColor:"gray"}}></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
         <h3 style={{marginLeft:"550px"}}>FIFA PARTNERS</h3>

        <Link> <img src="m1.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"250px"}}></img></Link>
        <Link> <img src="m2.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"50px"}}></img></Link>
        <Link><img src="m3.JPG" class="img-fluid" alt="Responsive image"style={{marginLeft:"50px"}}></img></Link>
        <Link><img src="m4.JPG" class="img-fluid" alt="Responsive image"style={{marginLeft:"50px"}}></img></Link>
         <br></br>
         <Link> <img src="m5.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"350px"}}></img></Link>
         <Link> <img src="m6.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"60px"}}></img></Link>
         <Link><img src="m7.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"60px"}}></img></Link>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <div style={{height:"2px",backgroundColor:"gray"}}></div>
         <br></br>
         <Link><img src="m8.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"60px"}}></img></Link>

         <div class="row">
    <div class="col-3" style={{}}>
     <Link style={{textDecoration: 'none'}}>   <h4 style={{marginLeft:"70px",marginTop:"30px"}}>EXPLORE</h4>
        <p style={{fontSize:18,marginLeft:"60px"}}>Competitions</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>About FIFA</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Women's Football</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Social Impact</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Football Development</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Technical</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Legal & Compliance</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>FIFA/Coca-Cola World ranking</p></Link>
    </div>
    <div class="col-6" style={{}}>
    <Link style={{textDecoration: 'none'}}> <h4 style={{marginLeft:"70px",marginTop:"30px"}}>ALSO VISIT</h4>
        <p style={{fontSize:18,marginLeft:"60px"}}>All stories & topics</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Official documents</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Jobs & Careers</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Contact FIFA</p></Link>
    </div>
    </div>

    </div>
    </div>
  </div> );
}

export default Grid;