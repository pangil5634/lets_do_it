import { useState } from "react";
import styled, { keyframes } from "styled-components";

function Psedo_Element() {
    const [input, setInput] = useState("");
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <Div>
            <Input type="text" onChange={handleInputChange} />
            <Title>{input}</Title>
        </Div>
    );
}
export default Psedo_Element;

const Div = styled.div`
    height: 30px;
    background-color: green;
    display: inline-block;
`;

const expandWidth = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

const Title = styled.div`
    font-size: 20px;
    display: inline-block;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 0; // 초기 width를 0으로 설정
        height: 5px;
        background: linear-gradient(to right, orange, purple);
        animation: ${expandWidth} 1s infinite alternate ; // 애니메이션 적용
    }
`;

const Input = styled.input`
    height: 25px;
`;
