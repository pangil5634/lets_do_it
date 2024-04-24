import styled from "styled-components";

export const Page = styled.div `
    width : ${props => props.width || "100%"};
    height : ${props => props.height || "auto%"};;
    box-sizing: border-box;
    padding : 20px;
    background-color : ${props => props.backgroundColor || "#FFF7D4"};
    color : ${props => props.color || "#527853"};
    display: flex;
    align-items:  ${props => props.alignItems || ""};
    flex-direction: ${props => props.flexDirection || "column"};
    justify-content: ${props => props.justifyContent || ""};
    border-radius: ${props => props.borderRadius || ""};
`;

export const MyButton = styled.button `
    border : none;
    width : ${props => props.width || ""};
    font-size : ${props => props.fontSize || ""};
    font-weight: ${props => props.fontWeight || ""};   
    height : 30px;
    border-radius: 5px;
    color : black;
    margin : ${props => props.margin || ""};

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
    height : ${props => props.height || "30px"};
    border : 1px solid #e9eaec;
    margin : ${props => props.margin || ""};
    border-radius: ${props => props.borderRadius || "" };
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

export const FieldSet = styled.fieldset `
    width : ${props => props.width || ""};
    @media (max-width: 768px) {
        font-size: 15px;
    }
    font-size : ${props => props.fontSize || ""};
`;

export const Legend = styled.legend `
    @media (max-width: 768px) {
        font-size: 20px;
    }
    font-size : ${props => props.fontSize || ""};
    font-weight: ${props => props.fontWeight || ""};
    color: ${props => props.color || ""};
`;

export const Img = styled.img `
    width : ${props => props.width || "100px"};
    border-radius:  ${props => props.borderRadius || ""};
    @media (max-width: 768px) {
        width: ${props => (props.widthOnMobile || "50px")};
    }
    
-webkit-filter: ${ ({
    blur}) => (blur ? 'blur(0)' : 'blur(3px)')};
    filter: ${ ({
        blur}) => (blur ? 'blur(0)' : 'blur(3px)')};

    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;

    &:hover {
    -webkit-filter: ${ ({
            blur}) => (blur ? 'blur(3px)' : 'blur(0)')};
    filter: ${ ({
                blur}) => (blur ? 'blur(3px)' : 'blur(0)')};
    }
`;