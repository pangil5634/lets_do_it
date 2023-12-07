import {Link, useNavigate} from "react-router-dom";
import {Outlet} from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import {useMediaQuery} from 'react-responsive';

import {MenuBar, UserName, LogInOutButton, Div} from "../components/Menubar";
import {signInWithPopup, signOut, GoogleAuthProvider, getAuth} from 'firebase/auth'; // signOut 추가
// import {useContext} from "react"; import {UserContext} from
// "../contexts/userContext";

import "../components/aTag.css";
import {useState} from "react";

function Layout() {
    const auth = getAuth();

    const [showMenu, setShowMenu] = useState(false);

    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }

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
            navigate('/', {replace: true});
            // window     .location     .reload();

        } catch (error) {
            console.error('로그아웃 중 오류 발생:', error);
        }
    };

    return (
        <div>
            <MenuBar>
                <Div>
                    {
                        isMobile
                            ? <FaBars
                                    onClick={handleToggleMenu}
                                    style={{
                                        cursor: 'pointer',
                                        marginLeft: "20px"
                                    }}/>
                            : <div>
                                    {/* 햄버거 아이콘 또는 다른 드롭다운 토글 버튼 */}
                                    {/* HomePage */}
                                    <Link to="/">
                                        <label>Home</label>
                                    </Link>

                                    {/* Post */}
                                    <Link to="/Post">
                                        <label>Post</label>
                                    </Link>

                                    {/* MyPage */}
                                    {
                                        auth.currentUser && <Link to="/MyPage">
                                                <label>MyPage</label>
                                            </Link>
                                    }
                                </div>
                    }

                    {/* 모바일 화면에서 보여질 드롭다운 메뉴 */}
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
                {
                    auth.currentUser
                        ? (
                            <div>
                                {/* <UserName>{auth.currentUser.displayName}님</UserName> */}
                                <LogInOutButton onClick={handleLogout}>로그아웃</LogInOutButton>
                            </div>
                        )
                        : (<LogInOutButton onClick={handleGoogleLogin}>Google 로그인</LogInOutButton>)
                }
            </MenuBar>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;