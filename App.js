// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import TextForm from './Components/TextForm'
import About from './Components/About';
import React, { useState } from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  const [color, setcolor] = useState("dark");

  const togglemode = () =>{
    if(color === 'dark'){setcolor('light')}
    else{setcolor('dark')}

  }

return (

<Router>
  <NavBar home ="HOME2" title = "Title" color ={color} toggle = {togglemode}/> 
<div className="container">
{/* <Routes>
    <Route path='/' element = {<TextForm heading="Please Write here..."/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={Error}/>
    </Routes>   */}

<TextForm/>
<About/>
</div>
</Router>

  );
}

export default App;
