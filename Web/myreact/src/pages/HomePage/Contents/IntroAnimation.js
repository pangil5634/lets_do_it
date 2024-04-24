import styled from "styled-components";
import { Img } from "../../../Layout/Components/Common";

function IntroAnimation() {
    return (
        <ContainerIntroAnimation>
            <WrapperAnimation>
                <Img src = "/img/Intro_nature.webp" width= "100%" height= "100%"/>
            </WrapperAnimation>
        </ContainerIntroAnimation>
    );
};

const ContainerIntroAnimation = styled.div`
    width: 100%;
    height : 600px;

    display: flex;
    justify-content: center;
    align-items: center;

;
`;

const WrapperAnimation = styled.div`
    width: 80%;
    height : 100%;

    & > img{
        border-radius: 50px;
    }
`;
export default IntroAnimation;