import {Link} from "react-router-dom";
import {Outlet} from 'react-router-dom';

import {MenuBar, UserName, LogInOutButton} from "../components/Menubar";
import {signInWithPopup, signOut, GoogleAuthProvider, getAuth} from 'firebase/auth'; // signOut 추가
// import {useContext} from "react"; import {UserContext} from
// "../contexts/userContext";

import "../components/aTag.css";
function Layout() {
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
        <div>
            <MenuBar>
                <div>
                    {/* HomePage */}
                    <Link to="/">
                        <label>Home</label>
                    </Link>

                    {/* Post */}
                    <Link to="/Post">
                        <label>Post</label>
                    </Link>

                    {/* MyPage */}
                    <Link to="/MyPage">
                        <label>MyPage</label>

                    </Link>
                </div>
                {
                    auth.currentUser
                        ? (
                            <div>
                                <UserName>{auth.currentUser.displayName}님</UserName>
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