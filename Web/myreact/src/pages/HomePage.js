// react import
import React from 'react';
// firebase import
import {useFirebase} from '../App';
// 이미지 import
import ImageCat from '../image/cat.png';
// 컴포넌트 import
import {Page, FieldSet, Legend} from '../components/Page';
import {UserName} from '../components/Menubar';
import {P} from '../components/Heading';

function HomePage() {
    // 변수 선언
    const {user} = useFirebase();

    return (
        <Page alignItems="center">
            <Page width="90%" backgroundColor="white" alignItems="center">
                {/* 로그인 시 보여지는 유저 이름 */}
                {
                    user && <div>
                            <UserName>{user.displayName}</UserName>님 환영합니다.</div>
                }

                {/* 페이지의 타이틀*/}
                <P fontSize="5vw" fontWeight="bold">팡팡 터지는 팡일이의 WebSite</P>

                {/*  */}
                <FieldSet width = "90%"  fontSize="1vw">
                    <Legend
                        fontSize = "1.5vw"
                        fontWeight = "bold"
                        color = "black"
                    >자기소개</Legend>
                    <p>안녕하세요! 즐거운 개발을 추구하는 <strong>프론트엔드 개발자</strong>가 되고 싶은 김광일입니다.</p>
                    
                    <p>현재 저는 한동대학교 전산전자공학부에 재학중이며, <strong>웹 개발</strong>을 주전공으로 갖기 위해 노력하고 있습니다.</p>

                    <p>부족한 실력이지만 자기소개 페이지 개발을 시작으로 포토폴리오를 만들어나가보려고 합니다.</p>

                    <p>귀엽고 재밌게 봐주시면 좋겠습니다~</p>
                </FieldSet>
            </Page>
        </Page>
    );
}

export default HomePage;
