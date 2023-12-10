import styled from "styled-components";

export const MenuBar = styled.div `
    width : 100%;
    height : 8vh;
    background-color: #9BB8CD;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        @media (max-width: 768px) {
            margin : 0px;
            margin-left: 10px;
        }
        margin : 0px 20px;
        /* background-color: #fff; */
    }

    a:hover{
        color : #FFF7D4;
    }
    font-size: ${props => props.fontSize || ""};
    font-weight: ${props => props.fontWeight || ""};

`;

export const UserName = styled.label `
    font-weight: bold;
`;

export const LogInOutButton = styled.button `
    border : none;
    width : ${props => props.width || ""};
    height : 30px;
    border-radius: 5px;
    margin : 0px 20px;
    color : black;

    &:hover{
        background-color: black;
        color : white;
    }
`;

export const Div = styled.div `
    display: flex;
    justify-content:  ${props => props.justifyContent || "start"};
    align-items: center;
    width : ${props => props.width || ""};
    height : ${props => props.height || ""};
    background-color: ${props => props.backgroundColor || ""};;
    margin : ${props => props.margin || ""};
    flex-wrap: ${props => props.flexWrap || ""};
    border-radius:  ${props => props.borderRadius || ""};
    flex-direction:  ${props => props.flexDirection || ""};
`;