import styled from "styled-components";

function DisplayFlex() {
    return (
        <div>
            <h1>Display flex</h1>
            <Div0>

                <Div1>
                    <Box/>
                    <Box/>
                    <Box/>
                </Div1>
                <br></br>
                <Div2>
                    <Box/>
                    <Box/>
                    <Box/>
                </Div2>
            </Div0>
        </div>
    );
}

export default DisplayFlex;

const Div0 = styled.div`
    display: inline-flex;
`
const Div1 = styled.div `
    display: flex;
`;

const Div2 = styled.div `
    display: inline-flex;
`;

const Box = styled.div `
    width: 50px;
    height : 50px;
    background-color: orange;
    margin: 5px;
`