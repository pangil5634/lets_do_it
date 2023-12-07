import styled from "styled-components";

export const MenuBar = styled.div`
    width : 100%;
    height : 8vh;
    background-color: #9BB8CD;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        margin : 0px 20px;
        /* background-color: #fff; */
    }

    a:hover{
        color : #FFF7D4;
    }

`;


export const UserName = styled.label`
    font-weight: bold;
`;

export const LogInOutButton = styled.button`
    border : none;
    width : ${props => props.width || ""};
    height : 30px;
    border-radius: 5px;
    margin : 0px 20px;

    &:hover{
        background-color: black;
        color : white;
    }
`;