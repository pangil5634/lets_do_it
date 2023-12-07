import React, {createContext, useContext, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';

import {collection, getDocs} from 'firebase/firestore';
import {db} from './firebase';

// Firebase 컨텍스트 생성
const FirebaseContext = createContext();

function App() {
    // 상태를 사용하여 데이터를 저장
    const [posts, setPosts] = useState([]);

    // useEffect를 사용하여 컴포넌트가 마운트되었을 때 데이터를 가져옴
    useEffect(() => {
        // async 함수를 만들어서 데이터를 가져오는 로직을 넣음
        const fetchData = async () => {
            // 컬렉션의 참조를 만들어서 데이터를 가져옴
            const postsCollection = collection(db, 'posts');
            const querySnapshot = await getDocs(postsCollection);

            // querySnapshot에서 각 문서의 데이터를 추출하여 배열로 저장
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            // 상태를 업데이트하여 컴포넌트가 리렌더링되도록 함
            setPosts(data);
        };

        // 데이터 가져오는 함수 호출
        fetchData();
    }, []); // 빈 배열을 넣어 한 번만 실행되도록 함

    // Firebase 컨텍스트 값을 설정
    const firebaseContextValue = {
        posts
    };

    return (
        // Firebase 컨텍스트를 제공하는 부모 컴포넌트
        <FirebaseContext.Provider value={firebaseContextValue}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* HomePage에 Firebase 컨텍스트 전달 */}
                    <Route index="index" element={<HomePage />}/>
                    <Route path="/MyPage" element={<MyPage />}/>
                </Route>
            </Routes>
        </FirebaseContext.Provider>
    );
}

// 컨텍스트를 사용하는 함수를 따로 정의하여 간편하게 사용
export const useFirebase = () => {
    return useContext(FirebaseContext);
};

export default App;
