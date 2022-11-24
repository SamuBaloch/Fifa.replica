import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

// import Navbar from './Navbar.js';
import Grid from './grid.js';
// import MAIN from './Container.js';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <BrowserRouter>
      <Grid/>
      <Routes>
        <Route path='./' element={<Grid/>}/>
      </Routes>
      </BrowserRouter>
      
     
      {/* <MAIN/> */}
    </div>
    
  );
}

export default App;
