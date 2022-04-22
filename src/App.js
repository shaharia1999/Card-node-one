import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Adduser from './Componant/Addusr/Adduser';
import Home from './Componant/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='user/add' element={<Adduser/>}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
