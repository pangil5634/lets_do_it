import {Link} from "react-router-dom";
import {Container, Title} from "./AtomContext/AtomContext";
import styled from "styled-components";
import { BlueButton } from "./ScTest";

function Home() {

    return (
        <Container>
            <Title>React exercise</Title>
            <MenuLink to="/atom_context">Atom Contet</MenuLink>
            <MenuLink to="/atom_context_result">Atom Contet Result</MenuLink>
            <MenuLink to="/axios_test">Axios Test</MenuLink>
            <MenuLink to="/display_flex">Display flex</MenuLink>
            <MenuLink to="/cra">CRA</MenuLink>
            <MenuLink to="/axios_test">Axios Test</MenuLink>
            <MenuLink to="/sc_test">sc_test</MenuLink>
        </Container>
    );
}

export const MenuLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color : black;

    &:hover{
        color : orange;
    }
`   
export default Home;