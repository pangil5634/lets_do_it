// react import
import React from 'react';
// firebase import
import { useFirebase } from '../App';
// 이미지 import
import ImageCat from '../image/cat.png';
// 컴포넌트 import
import {Page} from '../components/Page';
import {UserName} from '../components/Menubar';

function HomePage() {
    // 변수 선언
    const {user} = useFirebase();

    return (
        <Page>
            <img src={ImageCat}/>
            <h1>홈 페이지입니다.</h1>

            {/* 로그인 시 보여지는 유저 이름 */}
            {
                user && <div>
                        <UserName>{user.displayName}</UserName>님 환영합니다.</div>
            }
        </Page>
    );
}

export default HomePage;
