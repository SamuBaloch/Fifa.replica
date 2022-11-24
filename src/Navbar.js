import React from "react";
function Navbar() {
    return ( 
        <ul class="nav justify-content-end">
            <div>
            <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">store</a>
  </li>
  
            </div>
 
  <li class="nav-item">
    <a class="nav-link" href="#">Tickets</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
     );
}

export default Navbar;