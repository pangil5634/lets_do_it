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
        </Page>
    );
}

export default HomePage;
