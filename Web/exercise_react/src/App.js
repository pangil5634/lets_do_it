
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtomContext from './Pages/AtomContext/AtomContext';
import AtomContextResult from './Pages/AtomContext/AtomContextResult';
import Inputs from './Pages/Inputs';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      {/* <Inputs/> */}
      <Routes>
        <Route path = "/" index element ={<Home/>}/>
        <Route path="/atom_context" element={<AtomContext />} />
        <Route path="/atom_context_result" element={<AtomContextResult/>}/>
      </Routes>
    </div>
  );
}

export default App;
