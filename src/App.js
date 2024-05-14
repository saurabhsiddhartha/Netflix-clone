// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import Mylist from './components/routes/Mylist';
import Movies from './components/routes/Movies';
import RecentlyAdded from './components/routes/RecentlyAdded';
import Tvshows from './components/routes/Tvshows';
import Home from  './components/Home'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/list' element={<Mylist />} />
        <Route path='/recently' element={<RecentlyAdded />} />
        <Route path='/tvshows' element={<Tvshows />} /> 
      </Routes>
      
    </Router>
  );
}

export default App;
