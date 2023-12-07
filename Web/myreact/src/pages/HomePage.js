// HomePage.js
import React from 'react';
import {Page} from '../components/Page';
import {useFirebase} from '../App';
import { UserName } from '../components/Menubar';
import ImageCat from '../image/cat.png';
function HomePage() {
    const {posts, setPosts} = useFirebase();
    const {user} = useFirebase();

    return (
        <Page>
            <img src = {ImageCat}/>
            <h1>홈 페이지입니다.</h1>
            {user && <div><UserName>{user.displayName}</UserName>님 환영합니다.</div>}
        </Page>
    );
}

export default HomePage;
