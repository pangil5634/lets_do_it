import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/etc/Home';
import AtomContext from './Pages/AtomContext/AtomContext';
import AtomContextResult from "./Pages/AtomContext/AtomContextResult";
import AxiosTest from "./Pages/Axios/AxiosTest";
import DisplayFlex from "./Pages/Display/DisplayFlex";
import ScTest from "./Pages/etc/ScTest";
import FrontBackTest from "./Pages/etc/FrontBackTest";
import Map from "./Pages/etc/Map";
import CRA19capstoneFestivalPage from "./Pages/etc/CRA19capstoneFestivalPage";
import Notification from "./Pages/Notification/Notification"
import NotFound from './Pages/etc/NotFound'; 
import Psedo_Element from './Pages/CSS/Pseudo_Element/Psedo_Element';
import SpringAPITest from './Pages/etc/SpringAPITest';
function App() {
    return (
        <div>
            {/* <Inputs/> */}
            <Routes>
                <Route path="/" index element ={<Home/>}/>
                <Route path="/atom_context" element={<AtomContext />}/>
                <Route path="/atom_context_result" element={<AtomContextResult />}/>
                <Route path="/axios_test" element={<AxiosTest />}/>
                <Route path="/display_flex" element={<DisplayFlex />}/>
                <Route path="/cra" element={<CRA19capstoneFestivalPage />}/>
                <Route path="/sc_test" element={<ScTest/>}/>
                <Route path="/front_back_test" element={<FrontBackTest/>}/>
                <Route path="/map" element={<Map />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/css/psedo_element" element={<Psedo_Element />} />
                <Route path="/spring_api_test" element={<SpringAPITest />} />

                {/* wrong path */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
