import styled from "styled-components";

export const H2 = styled.h2`
    &:hover {
        color: ${(props) => (props.hoverColor ? props.hoverColor : "yellow")};
    }
`;
