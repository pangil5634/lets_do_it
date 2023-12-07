// HomePage.js
import React from 'react';
import {Page} from '../components/Page';
import {useFirebase} from '../App';

import {Link} from 'react-router-dom';

function HomePage() {
    const {posts, setPosts} = useFirebase();


   

    return (
        <Page>
            <h1>홈 페이지입니다.</h1>
            {/* 나머지 코드 유지 */}
            <Link to="/AddPage">
                <button>등록 페이지</button>
            </Link>
            {/* 나머지 코드 유지 */}
        </Page>
    );
}

export default HomePage;
