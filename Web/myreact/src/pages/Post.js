// Post.js
import React from 'react';
import {Page} from '../components/Page';
import {useFirebase} from '../App';
import {Link} from 'react-router-dom';
import {H2} from "../components/Heading";
import {deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebase';
import {getAuth} from 'firebase/auth'; // signOut 추가

function Post() {
    // useFirebase 훅을 사용하여 Firebase 데이터에 접근
    const {posts, setPosts} = useFirebase(); // auth 추가
    const auth = getAuth();
    const deletePost = async (postId) => {
        try {
            const updatedPosts = posts.filter((post) => post.id !== postId);
            setPosts(updatedPosts);

            console.log('Firestore에서 게시물 삭제 중:', postId);
            await deleteDoc(doc(db, 'posts', postId));
            console.log('Firestore에서 게시물이 성공적으로 삭제되었습니다.');
        } catch (error) {
            console.error("게시물 삭제 중 오류 발생:", error);
        }
    };

    return (
        <Page>
            <h1>Post 페이지입니다.</h1>
            <Link to="/AddPage">
                {auth.currentUser && <button>등록 페이지</button>}
            </Link>

            {/* posts 배열을 사용하여 데이터를 렌더링 */}
            {
                posts.map((post) => (
                    <div key={post.id}>
                        {/* Link 컴포넌트를 사용하여 페이지 이동 */}
                        <Link to={`/post/${post.id}`}>
                            <H2 hoverColor="skyblue">{post.title}</H2>
                        </Link>
                        {/* 사용자가 로그인되어 있는 경우에만 삭제 버튼 표시 */}
                        {auth.currentUser && (<button onClick={() => deletePost(post.id)}>삭제</button>)}
                    </div>
                ))
            }
        </Page>
    );
}

export default Post;
