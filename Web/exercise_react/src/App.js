
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AtomContext from './Pages/AtomContext/AtomContext';
import AtomContextResult from './Pages/AtomContext/AtomContextResult';
import Home from './Pages/Home';
import AxiosTest from './Pages/Axios/AxiosTest';
import DisplayFlex from './Pages/Display/DisplayFlex';
import CRA19capstoneFestivalPage from './Pages/CRA19capstoneFestivalPage';
import ScTest from './Pages/ScTest';
import FrontBackTest from './Pages/FrontBackTest';
import Map from './Pages/Map';

function App() {
    return (
        <div>
        {/* <Inputs/> */}
        <Routes>
            <Route path="/" index element ={<Home/>}/>
            <Route path="/atom_context" element={<AtomContext />} />
            <Route path="/atom_context_result" element={<AtomContextResult />} />
            <Route path="/axios_test" element={<AxiosTest />} />
            <Route path="/display_flex" element={<DisplayFlex />} />
            <Route path="/cra" element={<CRA19capstoneFestivalPage />} />
            <Route path="/axios_test" element={<AxiosTest/>}/>
            <Route path="/sc_test" element={<ScTest/>}/>
            <Route path="/front_back_test" element={<FrontBackTest/>}/>
                <Route path="/map" element={<Map/>}/>
        </Routes>
        </div>
    );
}

export default App;

// import React, {useState} from 'react';
// import axios from 'axios';

// const App = () => {
//     const [postData, setPostData] = useState(null);
//     const [getData, setGetData] = useState(null);
//     const [getData2, setGetData2] = useState(null);
//     const handlePostRequest = async () => {
//         try {
//             const response = await axios.get(
//                 'http://172.17.210.248:8080/test',
//                 {withCredentials: true}
//             );
//             setPostData(response.data);
//         } catch (error) {
//             console.error('Error with POST request:', error);
//         }
//     };

//     const handleGetRequest = async () => {
//         try {
//             const response = await axios.get(
//                 'http://172.17.210.248:8080/hi/hello',
//                 {withCredentials: true}
//             );
//             setGetData(response.data);
//         } catch (error) {
//             console.error('Error with GET request:', error);
//         }
//     };

//     const handleDeleteRequest = async () => {
//         try {
//             const response = await axios.get('http://172.17.210.248:8080/hi/hi', {
//                 data: 'your_post_data' // 여기에 필요한 POST 데이터 넣기

//             }, {withCredentials: true});
//             setGetData2(response.data);
//         } catch (error) {
//             console.error('Error with POST request:', error);
//         }
//     };

//     const handlePost = async () => {
//         try {
//             const response = await axios.post('http://172.17.210.248:8080/session', {
//                 data: 'your_post_data' // 여기에 필요한 POST 데이터 넣기

//             }, {withCredentials: true});
//             setPostData(response.data);
//         } catch (error) {
//             console.error('Error with POST request:', error);
//         }
//     };

//     const handleGet = async () => {
//         try {
//             const response = await axios.get(
//                 'http://172.17.210.248:8080/get_session',
//                 {withCredentials: true}
//             );
//             setGetData(response.data);
//         } catch (error) {
//             console.error('Error with GET request:', error);
//         }
//     };

//     const handleDelete = async () => {
//         try {
//             const response = await axios.post('http://172.17.210.248:8080/delete_session', {
//                 data: 'your_post_data' // 여기에 필요한 POST 데이터 넣기

//             }, {withCredentials: true});
//             setGetData2(response.data);
//         } catch (error) {
//             console.error('Error with POST request:', error);
//         }
//     };
//     return (
//         <div>
//             <div>
//                 <button onClick={handlePostRequest}>Send POST Request</button>
//                 <button onClick={handleGetRequest}>Send GET Request</button>
//                 <button onClick={handleDeleteRequest}>Send GET Request</button>
//                 <div>
//                     <h3>POST Response:</h3>
//                     {
//                         postData
//                             ? <pre>{JSON.stringify(postData, null, 2)}</pre>
//                             : 'No POST data received'
//                     }
//                 </div>

//                 <div>
//                     <h3>GET Response:</h3>
//                     {
//                         getData
//                             ? <pre>{JSON.stringify(getData, null, 2)}</pre>
//                             : 'No GET data received'
//                     }
//                 </div>

//                 <div>
//                     <h3>DELETE Response:</h3>
//                     {
//                         getData2
//                             ? <pre>{JSON.stringify(getData, null, 2)}</pre>
//                             : 'No GET data received'
//                     }
//                 </div>
//             </div>

//             <div>
//                 <h1>Session</h1>
//                 <button onClick={handlePost}>Send POST Request</button>
//                 <button onClick={handleGet}>Send GET Request</button>
//                 <button onClick={handleDelete}>Send DELETe Request</button>
//                 <div>
//                     <h3>POST Response:</h3>
//                     {
//                         postData
//                             ? <pre>{JSON.stringify(postData, null, 2)}</pre>
//                             : 'No POST data received'
//                     }
//                 </div>

//                 <div>
//                     <h3>GET Response:</h3>
//                     {
//                         getData
//                             ? <pre>{JSON.stringify(getData, null, 2)}</pre>
//                             : 'No GET data received'
//                     }
//                 </div>

//                 <div>
//                     <h3>DELETE Response:</h3>
//                     {
//                         getData
//                             ? <pre>{JSON.stringify(getData, null, 2)}</pre>
//                             : 'No GET data received'
//                     }
//                 </div>
//             </div>
//             <a href='http://172.17.210.248:8080/hihi'>로그인</a>
//         </div>
//     );
// };

// export default App;
