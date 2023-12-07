import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Outlet} from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import {useMediaQuery} from 'react-responsive';
import {MenuBar, UserName, LogInOutButton, Div} from "../components/Menubar";
import {signInWithPopup, signOut, GoogleAuthProvider, getAuth, onAuthStateChanged} from 'firebase/auth';

import "../components/aTag.css";

function Layout() {
    const auth = getAuth();
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const navigate = useNavigate();

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        // 사용자의 로그인 상태 변화를 감지
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // 사용자가 로그인한 경우
                if (user.email !== 'oksk6689@gmail.com') {
                    // 만약 로그인한 사용자의 이메일이 oksk6689@gmail.com이 아니면 자동 로그아웃
                    signOut(auth).then(() => {
                        alert("권한이 없는 계정입니다.")
                        console.log('자동 로그아웃 성공');
                    }).catch((error) => {
                        console.error('자동 로그아웃 중 오류 발생:', error);
                    });
                }
            }
        });

        // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
        return () => unsubscribe();
    }, [auth]);

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Google 로그인 성공:', result.user);
            window.location.reload();
        } catch (error) {
            console.error('Google 로그인 중 오류 발생:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('로그아웃 성공');
            navigate('/', {replace: true});
        } catch (error) {
            console.error('로그아웃 중 오류 발생:', error);
        }
    };

    return (
        <div>
            <MenuBar>
                <Div>
                    {isMobile
                        ? <FaBars
                                onClick={handleToggleMenu}
                                style={{
                                    cursor: 'pointer',
                                    marginLeft: "20px"
                                }}/>
                        : <div>
                                <Link to="/">
                                    <label>Home</label>
                                </Link>
                                <Link to="/Post">
                                    <label>Post</label>
                                </Link>
                                {auth.currentUser && <Link to="/MyPage">
                                        <label>MyPage</label>
                                    </Link>}
                            </div>}
                    {showMenu && (
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/Post">Post</Link>
                            {auth.currentUser && <Link to="/MyPage">
                                    <label>MyPage</label>
                                </Link>}
                        </div>
                    )}
                </Div>
                {auth.currentUser
                    ? <div>
                            <LogInOutButton onClick={handleLogout}>로그아웃</LogInOutButton>
                        </div>
                    : <LogInOutButton onClick={handleGoogleLogin}>Google 로그인</LogInOutButton>}
            </MenuBar>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;
