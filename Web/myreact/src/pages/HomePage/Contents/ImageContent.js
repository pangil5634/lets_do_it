import styled from "styled-components";
import { Img } from "../../../Layout/Components/Common";

function ImageContent() {

    const handleNavigate = (name) => {
        if (window.confirm(`${name}로 이동하시겠습니까?`)) {
            alert("준비중");
        }
    }
    return (
        <ContainerImageContent>
            <WrapperImageContentTitle>
                <ImageContentTitle>Project / Website</ImageContentTitle>
            </WrapperImageContentTitle>
            <DivImageItems>
                <ImageItem onClick={() => handleNavigate('Project')} >
                    <IntroImage src="img/Intro_folder.png" alt="image2" width="300px" />
                    <IntroImageTitle>Project</IntroImageTitle>
                </ImageItem>
                <ImageItem onClick={() => handleNavigate('Website')} >
                    <IntroImage src="img/Intro_world.png" alt="image2" width="300px" />
                    <IntroImageTitle>Website</IntroImageTitle>
                </ImageItem>
            </DivImageItems>
        </ContainerImageContent>
    );
}

const ContainerImageContent = styled.div`
    width: 100%;
    height: 100%;
`;


const DivImageItems = styled.div`
    width: 100%;
    height : auto;
    display: flex;
    justify-content: space-around;
`
const ImageItem = styled.div`
    width: 500px;
    height : 400px;
    /* background-color: #fff; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;

    transition: transform 1s;

    &:hover {
        transform: scale(1.1); /* 확대 */
    }

`;

const IntroImage = styled(Img)`
`
const IntroImageTitle = styled.p`
    margin-top: 20px;
    font-size: 30px;
`


const WrapperImageContentTitle = styled.div`
    width: 100%;
    height : 100px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 200px;
`;
const ImageContentTitle = styled.p`
    font-size: 50px;
`; 

export default ImageContent;