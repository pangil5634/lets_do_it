// react import
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Outlet} from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import {useMediaQuery} from 'react-responsive';
// 컴포넌트 import
import {MenuBar, LogInOutButton, Div} from "../components/Menubar";
import "../components/aTag.css";
// firebase import
import {signInWithPopup, signOut, GoogleAuthProvider, getAuth, onAuthStateChanged} from 'firebase/auth';

function Layout() {
    const auth = getAuth(); // 인증 모듈을 저장하고 있는 변수 선언
    const [showMenu, setShowMenu] = useState(false); // 모바일 버전을 위한 반응형 드롭다운 여부를 저장하는 변수 선언
    const isMobile = useMediaQuery({query: '(max-width: 768px)'}); // 모바일 버전을 위한 반응형 여부 변수 선언
    const navigate = useNavigate(); // 페이지 간의 이동 맡는 navigate 변수 선언

    // 토클 버튼을 클릭했는지를 판단하는 핸들러
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
                    signOut(auth)
                        .then(() => {
                            alert("권한이 없는 계정입니다.")
                            console.log('자동 로그아웃 성공');
                        })
                        .catch((error) => {
                            console.error('자동 로그아웃 중 오류 발생:', error);
                        });
                }
            }
        });

        // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
        return() => unsubscribe();
    }, [auth]);

    // 구글 로그인을 보여주는 핸들러 이 함수는 Google 로그인을 처리하는데 사용된다.
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider(); // GoogleAuthProvider 생성
        try {
            const result = await signInWithPopup(auth, provider); // signInWithPopup 함수를 사용하여 팝업 창에서 Google 로그인을 시도
            console.log('Google 로그인 성공:', result.user);
            window
                .location
                .reload();
        } catch (error) {
            console.error('Google 로그인 중 오류 발생:', error);
        }
    };

    // 로그아웃 핸들러
    const handleLogout = async () => {
        try {
            await signOut(auth); // signOut 함수를 사용하여 Firebase Authentication에서 로그아웃을 시도. 현재 로그인된 사용자를 로그아웃 처리.
            console.log('로그아웃 성공');
            navigate('/', {replace: true}); // 페이지를 새로고침하거나 다른 경로로 이동
        } catch (error) {
            console.error('로그아웃 중 오류 발생:', error);
        }
    };

    return (
        <div>
            <MenuBar>
                <Div>
                    {/* 모바일일 경우에는 드롭다운을 보여주고, 아닌 경우 Menubar 자체를 보여준다. */}
                    {
                        isMobile
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
                                    {
                                        auth.currentUser && <Link to="/MyPage">
                                                <label>MyPage</label>
                                            </Link>
                                    }
                                </div>
                    }

                    {/* 토글 버튼이 클릭되었을 때 보여질 Menubar */}
                    {
                        showMenu && (
                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/Post">Post</Link>
                                {
                                    auth.currentUser && <Link to="/MyPage">
                                            <label>MyPage</label>
                                        </Link>
                                }
                            </div>
                        )
                    }
                </Div>

                {/* 로그인 / 로그아웃 버튼 */}
                {
                    auth.currentUser
                        ? <div>
                                <LogInOutButton onClick={handleLogout}>로그아웃</LogInOutButton>
                            </div>
                        : <LogInOutButton onClick={handleGoogleLogin}>Google 로그인</LogInOutButton>
                }
            </MenuBar>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;
