import styled from "styled-components";
import IntroAnimation from "./IntroAnimation";

function IntroContent() {
    
    return (
        <ContainerIntroContent>
            <WrapperIntroTitle>
                <IntroTitleSub><NameHighlight>개발</NameHighlight>을 좋아하는 사람</IntroTitleSub>
                <IntroTitleMain>Developer <NameHighlight>Kwangil, Kim</NameHighlight></IntroTitleMain>
            </WrapperIntroTitle>
            <IntroAnimation/>
        </ContainerIntroContent>
    );
}

const ContainerIntroContent = styled.div`
    width: 100%;
    height: 100%;
`;

const WrapperIntroTitle = styled.div`
    width: 100%;
    height : 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const IntroTitleMain = styled.p`
    font-size: 40px;
    line-height: 45px;
`;

const IntroTitleSub = styled.p`
    font-size: 25px;
    line-height: 30px;

    margin-bottom: 10px;
`;

const NameHighlight = styled.span`
    font-size: inherit;
    color : orange;
`;
export default IntroContent;