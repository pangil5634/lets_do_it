import styled from "styled-components";

export const Page = styled.div `
    width : 100%;
    height : 100vh;
    box-sizing: border-box;
    padding : 20px;
    background-color: #FFF7D4;
    color : #527853;
`;


export const MyButton = styled.button`
    border : none;
    width : ${props => props.width || ""};
    height : 30px;
    border-radius: 5px;

    &:hover{
        background-color: black;
        color : white;
    }
    margin-left : ${props => props.marginLeft || ""};

    
`;