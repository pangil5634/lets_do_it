import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Layout/Layout";

function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Layout/>}>
                    <Route index path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );  
}

export default MyRoute;