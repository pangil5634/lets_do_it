import styled from "styled-components";

export const H2 = styled.h2 `

    &:hover {
        color: ${ (props) => (
    props.hoverColor
        ? props.hoverColor
        : "yellow"
)};
    }
`;

export const P = styled.p `
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    margin : ${props => props.margin || ''};
    text-align:  ${props => props.textAlign || ''};
    color : ${props => props.color || "black"}
`;
