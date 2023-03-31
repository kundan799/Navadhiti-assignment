import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
     <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/:id" element={<Search/>}/>
     </Routes>
    </div>
  );
}

export default App;
