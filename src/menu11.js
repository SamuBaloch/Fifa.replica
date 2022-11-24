import React from 'react';
import { Link } from 'react-router-dom';
import './Hovering.css'
function Menu() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light" >
  <div className="container-fluid" >
    <h4 id="xyz"style={{marginLeft:"550px"}}><strong> Fifa</strong></h4>
    <form className="d-flex input-group w-auto" style={{marginRight:"100px"}}>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
      <button type="button" className="btn btn-light">Store</button>
      <button type="button" className="btn btn-light">Tickets</button>
      <button type="button" className="btn btn-light">Login</button>
    </form>
  </div>
</nav>




<div >
<nav className="navbar navbar-expand-lg navbar-light bg-light"  >
 <div className="container-fluid" >
  
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="main_nav" style={{marginRight:"200px",width:"auto"}} >
	<ul className="navbar-nav nav nav-pills nav-fill" id="abcd">
		<li className="nav-item" > <a className="nav-link" href="#"><b>Tournaments</b> </a> 
        <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" > Tournaments 1</a></li>
			  <li><a className="dropdown-item" href="#" > Tournaments 2 </a></li>
			  <li><a className="dropdown-item" href="#" > Tournaments 3 </a></li>
		    </ul>
        </li>
        <li className="nav-item"style={{marginRight:"30px"}}> <a className="nav-link" href="#"><b>About</b> </a> 
        <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" > About 1</a></li>
			  <li><a className="dropdown-item" href="#" > About 2 </a></li>
			  <li><a className="dropdown-item" href="#" > About 3 </a></li>
		    </ul>
        </li>
        <li className="nav-item"style={{marginRight:"30px"}}> <a className="nav-link" href="#"><b>Women Football </b></a>
        <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" > Women 1</a></li>
			  <li><a className="dropdown-item" href="#" > Women 2 </a></li>
			  <li><a className="dropdown-item" href="#" > Women 3 </a></li>
		    </ul>
         </li>
        <li className="nav-item"style={{marginRight:"30px"}}> <a className="nav-link" href="#"><b>Social Impact</b> </a> 
        <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" > Social 1</a></li>
			  <li><a className="dropdown-item" href="#" > Social 2 </a></li>
			  <li><a className="dropdown-item" href="#" > Social 3 </a></li>
		    </ul>
        </li>
        <li className="nav-item"> <a className="nav-link" href="#"><b>Football Development</b> </a> 
        <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" > Development 1</a></li>
			  <li><a className="dropdown-item" href="#" > Development 2 </a></li>
			  <li><a className="dropdown-item" href="#" > Development 3 </a></li>
		    </ul>
        </li>
		<li className="nav-item"><a className="nav-link" href="#"><b> Technical</b> </a>
        <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" > Technical 1</a></li>
			  <li><a className="dropdown-item" href="#" > Technical 2 </a></li>
			  <li><a className="dropdown-item" href="#" > Technical 3 </a></li>
		    </ul>
        </li>
		<li className="nav-item"><a className="nav-link" href="#"> <b>Legal</b> </a>
        <ul className="dropdown-menu" >

       <Link to="/privacy"><li><a className="dropdown-item" href="#" > Privacy</a></li></Link>
      <Link to="/Terms"><li><a className="dropdown-item" href="#" > Terms </a></li></Link>
			  
			  
			 
		    </ul>
        </li>




		<li className="nav-item">
		   <a className="nav-link" href="#" >  <b>World Ranking </b> </a>
		    <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" > Ranking 1</a></li>
			  <li><a className="dropdown-item" href="#" > Ranking 2 </a></li>
			  <li><a className="dropdown-item" href="#" > Ranking 3 </a></li>
		    </ul>
		</li>
	</ul>
  </div> 
 </div> 
</nav>
</div>

        </div> 
    );
}

export default Menu;