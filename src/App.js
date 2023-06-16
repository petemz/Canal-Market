import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Food from './Components/Food';
import Retail from './Components/Retail';
import Community from './Components/Community';

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/food' element={ <Food /> } />
        <Route path='/retail' element={ <Retail /> }/>
        <Route path='/community' element={ <Community /> }/>
      </Routes>
    </div>
  );
}

export default App;
