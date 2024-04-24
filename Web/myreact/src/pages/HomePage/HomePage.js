import styled from "styled-components";
import IntroContent from "./Contents/IntroContent";
import ImageContent from "./Contents/ImageContent";

function HomePage() {
    
    return (
        <ContainerHomePage>
            <WrapperContent>
                <IntroContent/>
            </WrapperContent>
            <WrapperContent>

            </WrapperContent>
            <WrapperContent>
                <ImageContent/>
            </WrapperContent>
            {/* <WrapperContent>

            </WrapperContent> */}
        </ContainerHomePage>
    );
}

const ContainerHomePage = styled.div`
    width: 100%;
    height : auto;
`;

const WrapperContent = styled.div`
    width: 100%;
    height : 1200px;
    /* border-bottom: 1px solid pink; */
`

export default HomePage;