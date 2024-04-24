import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

import HomePage from "./Pages/HomePage/HomePage"

function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Layout/>}>
                    <Route index path="/" element={<HomePage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );  
}

export default MyRoute;