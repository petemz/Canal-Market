import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Food from './Components/Food';
import Retail from './Components/Retail';
import Community from './Components/Community';

import Nav from './Components/Nav';
import { useContext } from 'react';
import {Context} from "./Context"

function App() {
  const {setIsModal, isNav, setIsNav} = useContext(Context)
  
  return (
    <div className="App h-full relative">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/food' element={ <Food /> } />
        <Route path='/retail' element={ <Retail /> }/>
        <Route path='/community' element={ <Community /> }/>
      </Routes>

      
      {isNav && 
        <Nav setIsModal={setIsModal} setIsNav={setIsNav}/>
      }
    </div>
  );
}

export default App;
