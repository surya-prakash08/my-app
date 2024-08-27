
import './App.css';
import React, { useEffect, useState } from 'react'
import Counter from './components/counter/Counter';
import Webpage from './components/webpage/Home';
import {  Route, Router, Routes, Link } from 'react-router-dom';
import About from './components/webpage/About';
import Contacts from './components/webpage/Contacts';




const App = () => {

  return (
    <>

<nav className=" flex justify-between items-center h-10 w-full  border-4 border-black p-9 font-bold text-2xl bg-slate-700 text-yellow-400">Dummry React Website

<div className="pages text-green-400 flex justify-between gap-20">
  <Link to='/'>Home</Link>
  <Link to='/contacts'>Contacts</Link>
  <Link to='/about'>About</Link>
  <Link to='/counter'>Counter</Link>

</div>

</nav>


{/*         
          <Route path='/'> {<Webpage/>} </Route>
          <Route path='/about'> {<About/>} </Route>
          <Route path='contacts'> {<Contacts/>} </Route>
          <Route path='counter'> {<Counter/>} </Route> */}


        


        <Routes>
          <Route path='/' element={<Webpage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/counter' element={<Counter />} />
        
          </Routes>
      {/* <Contacts/>
      <Counter/> */}


    </>


  );

}
export default App;
