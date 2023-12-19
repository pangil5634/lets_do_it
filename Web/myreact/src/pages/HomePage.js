// react import
import React from 'react';
// firebase import
import {useFirebase} from '../App';
// 이미지 import
import ImageCat from '../image/cat.png';
// 컴포넌트 import
import {Page, FieldSet, Legend, Img, Label} from '../components/Page';
import {Div, UserName} from '../components/Menubar';
import {P} from '../components/Heading';

import imageCSS from '../image/PL/css.png';
import imageHTML from '../image/PL/html.png';
import imageJS from '../image/PL/javascript.png';
import imageJAVA from '../image/PL/java.png';
import imageGIT from '../image/PL/git.png';

function HomePage() {
    // 변수 선언
    const {user} = useFirebase();

    return (
        <Page alignItems="center">
            <Page
                width="90%"
                backgroundColor="white"
                alignItems="center"
                borderRadius="20px">
                {/* 로그인 시 보여지는 유저 이름 */}
                {
                    user && <div>
                            <UserName>{user.displayName}</UserName>님 환영합니다.</div>
                }

                {/* 페이지의 타이틀*/}
                <P fontSize="5vw" fontWeight="bold">팡팡 터지는 팡일이의 WebSite</P>

                {/* 페이지의 컨텐츠 */}
                <FieldSet width="90%" fontSize="20px">
                    <Legend fontSize="30px" fontWeight="bold" color="black">자기소개</Legend>
                    <p>안녕하세요! 즐거운 개발을 추구하는
                        <strong>프론트엔드 개발자</strong>가 되고 싶은 김광일입니다.</p>

                    <p>현재 저는 한동대학교 전산전자공학부에 재학중이며,
                        <strong>웹 개발</strong>을 주전공으로 갖기 위해 노력하고 있습니다.</p>

                    <p>부족한 실력이지만 자기소개 페이지 개발을 시작으로 포토폴리오를 만들어나가보려고 합니다.</p>

                    <p>귀엽고 재밌게 봐주시면 좋겠습니다~</p>
                </FieldSet>

                <br/>
                <br/> {/* 페이지의 컨텐츠 */}
                <FieldSet width="90%" fontSize="20px">
                    <Legend fontSize="30px" fontWeight="bold" color="black">개발 stack</Legend>
                    <P textAlign = "center">이미지에 마우스를 올리면 BLUR처리 됩니다.</P>
                    <br/>
                    <Div justifyContent="space-between">
                        <Div flexDirection="column">
                            <Img src={imageHTML} alt="html" blur={true} />
                            <Label color="black">html</Label>
                        </Div>
                        <Div flexDirection="column">
                            <Img src={imageCSS} alt="css" blur={true} />
                            <Label color="black">css</Label>
                        </Div>
                        <Div flexDirection="column">
                            <Img src={imageJS} alt="js" blur={true} />
                            <Label color="black">javascript</Label>
                        </Div>
                        <Div flexDirection="column">
                            <Img src={imageJAVA} alt="java" blur={true}/>
                            <Label color="black">java</Label>
                        </Div>
                        <Div flexDirection="column">
                            <Img src={imageGIT} alt="git" blur={true}/>
                            <Label color="black">git</Label>
                        </Div>

                    </Div>
                </FieldSet>
                {/* <Div> */}

                {/* </Div> */}
            </Page>
        </Page>
    );
}

export default HomePage;
