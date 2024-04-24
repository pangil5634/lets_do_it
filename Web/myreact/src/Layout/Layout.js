import {Outlet} from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

function Layout() {
    return (
        <ContainerLayout>
            {/* <ContainerHeader>
                <Header/>
            </ContainerHeader> */}
            <ContainerOutlet>
                <Outlet/>
            </ContainerOutlet>
        </ContainerLayout>
    );
}

// Container : 전체 Layout
const ContainerLayout = styled.div`
    width: 100%;
    height : auto;

    background-color: #000;
    color : white;
`; 

// Container : Header
const ContainerHeader = styled.div`
    width: 100%;
    height : 100px;
    background-color: inherit;
    /* position: fixed; */
    background-color: #ffffff50;
`;

// Container : Outlet
const ContainerOutlet = styled.div`
    width: 100%;
    height : auto;
    background-color: inherit;
`;
export default Layout;