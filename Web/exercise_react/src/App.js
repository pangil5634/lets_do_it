
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtomContext from './Pages/AtomContext/AtomContext';
import AtomContextResult from './Pages/AtomContext/AtomContextResult';
import Inputs from './Pages/Inputs';
import Home from './Pages/Home';
import AxiosTest from './Pages/Axios/AxiosTest';
import DisplayFlex from './Pages/Display/DisplayFlex';

function App() {
  return (
    <div>
      {/* <Inputs/> */}
      <Routes>
        <Route path = "/" index element ={<Home/>}/>
        <Route path="/atom_context" element={<AtomContext />} />
        <Route path="/atom_context_result" element={<AtomContextResult />} />
        <Route path="/axios_test" element={<AxiosTest />} />
        <Route path="/display_flex" element={<DisplayFlex/>} />
      </Routes>
    </div>
  );
}

export default App;
