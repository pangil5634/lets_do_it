// ### import 구문
// react
import React, { createContext, useContext, useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
// firebase
import { collection, getDocs } from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { db } from './firebase';
// Pages
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import Post from './pages/Post';
import PostDetails from './pages/PostDetails';
import AddPage from './pages/AddPage';

//
//
//

function App() {
    // 변수 선언
    const [posts, setPosts] = useState([]); // firebase에 저장된 게시글 정보를 담고 있는 변수
    const [user, setUser] = useState(null); // firebase에 로그인된 계정 정보를 담고 있는 변수

    // useEffect를 사용하여 컴포넌트가 마운트되었을 때 데이터를 가져옴
    // *** useEffect 함수는 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
    useEffect(() => {
        // 데이터를 가져오는 구문
        // async 함수를 만들어서 데이터를 가져오는 로직을 넣음
        const fetchData = async () => {
            // posts라는 컬렉션을 참조
            // 컬렉션의 참조를 만들어서 데이터를 가져옴
            const postsCollection = collection(db, 'posts'); // posts 라는 컬렉션을 참조하는 변수 선언
            const querySnapshot = await getDocs(postsCollection); // postColection 변수를 통해 getDocs 동작을 진행하는 querySnapshot 변수 선언

            // querySnapshot에서 각 문서의 데이터를 추출하여 배열로 저장
            const data = []; // 각 문서의 데이터를 저장하는 배열
            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            // 상태를 업데이트하여 컴포넌트가 리렌더링되도록 함
            setPosts(data); // data를 posts에 저장한다.
        };

        // 데이터 가져오는 함수 호출
        fetchData();
    }, []); // 빈 배열을 넣어 한 번만 실행되도록 함

    // 인증 모듈을 저장하고 있는 변수 선언
    const auth = getAuth(); 

    // useEffect를 사용하여 로그인 상태를 감지
    useEffect(() => {
        // onAuthStateChanged 함수를 사용하여 Firebase Authentication의 상태 변화를 감지한다.
        // 이 함수는 사용자 로그인 또는 로그아웃 상태가 변경될 때 호출된다.
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // 로그인이 성공한 경우
                setUser(user); // 얻은 user값으로 user 정보 저장
            } else {
                // 로그아웃 또는 로그인 실패한 경우
                setUser(null); // null로 user 정보 저장
            }
        });

        // cleanup 함수에서 구독 해제
        return() => unsubscribe();
    }, [auth]);

    // Firebase 컨텍스트 값을 설정
    const firebaseContextValue = {
        posts, // 게시글 정보
        setPosts, // 게시글 저장하는 핸들러
        user // 유저 정보
    };

    return (
        // Firebase 컨텍스트를 제공하는 부모 컴포넌트
        <FirebaseContext.Provider value={firebaseContextValue}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* HomePage에 Firebase 컨텍스트 전달 */}
                    <Route index="index" element={<HomePage />}/>
                    <Route path="/MyPage" element={<MyPage />}/>
                    <Route path="/post" element={<Post/>}/>
                    <Route path="/post/:postId" element={<PostDetails />}/>
                    <Route path="/AddPage" element={<AddPage/>}/>
                </Route>
            </Routes>
        </FirebaseContext.Provider>
    );
}

// Firebase 컨텍스트 생성
const FirebaseContext = createContext();

// 컨텍스트를 사용하는 함수를 따로 정의하여 간편하게 사용
export const useFirebase = () => {
    return useContext(FirebaseContext);
};

export default App;
