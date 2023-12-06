import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
// import UserProvider from "./contexts/userContext";
function App() {

    // case 현중
    return (
        // <UserProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index="index" element={<HomePage/>}/>
                </Route>
            </Routes>
        // </UserProvider>
    );
}

export default App;
