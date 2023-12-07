// HomePage.js
import React from 'react';
import {Page} from '../components/Page';
import {useFirebase} from '../App';
import {signInWithPopup, signOut, GoogleAuthProvider, getAuth} from 'firebase/auth'; // signOut 추가
import {Link} from 'react-router-dom';

function HomePage() {
    const {posts, setPosts} = useFirebase();
    const auth = getAuth();

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Google 로그인 성공:', result.user);
            window
                .location
                .reload();
        } catch (error) {
            console.error('Google 로그인 중 오류 발생:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('로그아웃 성공');
            window
                .location
                .reload();
        } catch (error) {
            console.error('로그아웃 중 오류 발생:', error);
        }
    };

    return (
        <Page>
            <h1>홈 페이지입니다.</h1>
            {
                auth.currentUser
                    ? (
                        <div>
                            <p>안녕하세요, {auth.currentUser.displayName}님!</p>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    )
                    : (<button onClick={handleGoogleLogin}>Google 로그인</button>)
            }
            {/* 나머지 코드 유지 */}
            <Link to="/AddPage">
                <button>등록 페이지</button>
            </Link>
            {/* 나머지 코드 유지 */}
        </Page>
    );
}

export default HomePage;
