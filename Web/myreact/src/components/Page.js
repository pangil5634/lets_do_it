import styled from "styled-components";

export const Page = styled.div `
    width : 100%;
    height : 100vh;
    box-sizing: border-box;
    padding : 20px;
    background-color: #FFF7D4;
    color : #527853;
`;

export const MyButton = styled.button `
    border : none;
    width : ${props => props.width || ""};
    font-size : ${props => props.fontSize || ""};
    font-weight: ${props => props.fontWeight || ""};   
    height : 30px;
    border-radius: 5px;
    color : black;

    &:hover{
        background-color: black;
        color : white;
    }
    margin-left : ${props => props.marginLeft || ""};

    
`;

export const Label = styled.label `
    font-size : ${props => props.fontSize || ""};
    font-weight: ${props => props.fontWeight || ""};
    color: ${props => props.color || ""};
`;

export const Input = styled.input `
    font-size : ${props => props.fontSize || ""};
    color: ${props => props.color || ""};
    width : ${props => props.width || ""};
    height : 30px;
    border : 1px solid #e9eaec;
    margin : ${props => props.margin || ""};
`;

export const Textarea = styled.textarea `
    resize: none;
    font-size : ${props => props.fontSize || ""};
    color: ${props => props.color || ""};
    width : ${props => props.width || ""};
    height : 100px;
    border : 1px solid #e9eaec;
    margin : ${props => props.margin || ""};
`;