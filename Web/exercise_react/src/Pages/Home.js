import {Link} from "react-router-dom";
import {Container, Title} from "./AtomContext/AtomContext";
import styled from "styled-components";

function Home() {

    return (
        <Container>
            <Title>React exercise</Title>
            <MenuLink to="/atom_context">Atom Contet</MenuLink>
            <MenuLink to="/atom_context_result">Atom Contet Result</MenuLink>
        </Container>
    );
}

const MenuLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color : black;

    &:hover{
        color : orange;
    }
`   
export default Home;