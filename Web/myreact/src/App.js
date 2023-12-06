import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
// import UserProvider from "./contexts/userContext";
function App() {

    // case 현중
    return (
        // <UserProvider>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index="index" element={<HomePage/>}/>
                <Route path="/MyPage" element={<MyPage/>}/>
            </Route>
        </Routes>
        // </UserProvider>
    );
}

export default App;
