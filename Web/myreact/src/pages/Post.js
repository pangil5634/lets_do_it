// react import
import React from 'react';
import {Link} from 'react-router-dom';
// 컴포넌트 import
import {H2} from "../components/Heading";
import {Page, MyButton, Img} from '../components/Page';
import {Div} from '../components/Menubar';
// firebase import
import {deleteDoc, doc} from 'firebase/firestore';
import {db} from '../firebase';
import {getAuth} from 'firebase/auth';
import {useFirebase} from '../App';
// import {useRecoilState} from 'recoil';
// import {countState, titleState} from '../context/Atom';

function Post() {
    // useFirebase 훅을 사용하여 Firebase 데이터에 접근
    const {posts, setPosts} = useFirebase();
    const auth = getAuth(); // 인증 모듈을 저장하고 있는 변수 선언

    // post를 삭제하는 핸들러
    const deletePost = async (postId) => {
        try {
            if (window.confirm("데이터를 삭제하시겠습니까?")) {
                const updatedPosts = posts.filter((post) => post.id !== postId); // 데이터를 삭제 진행
                setPosts(updatedPosts); // 삭제가 이루어진 데이터를 기반으로 수정

                console.log('Firestore에서 게시물 삭제 중:', postId);
                await deleteDoc(doc(db, 'posts', postId));
                console.log('Firestore에서 게시물이 성공적으로 삭제되었습니다.');
                alert("데이터가 정상적으로 삭제되었습니다.");
            } else {
                alert("데이터 삭제가 취소되었습니다.");
            }
        } catch (error) {
            console.error("게시물 삭제 중 오류 발생:", error);
        }
    };
    // const [counter, setCounter] = useRecoilState(countState);
    // const [title, setTitle] = useRecoilState(titleState);
    return (
        <Page alignItems="center">
            {/* <h1>Counter 확인하기 : {counter}</h1>
            <h1>Title 확인하기 : {title}</h1> */}
            <Page
                width="90%"
                backgroundColor="white"
                alignItems="center"
                borderRadius="20px">
                <h1>Post 페이지입니다.</h1>

                {/* 등록 페이지로 이동하는 버튼 */}
                {/* 어드민 관리자만 뜨게 한다. */}
                <Link to="/AddPage">
                    {auth.currentUser && <MyButton fontSize="1.3rem" fontWeight="bold">등록 페이지</MyButton>}
                </Link>

                {/* 등록된 포스트 내역을 보여주는 영역 */}
                <Div width="100%" flexWrap="wrap" justifyContent="center">
                    {/* posts 배열을 사용하여 데이터를 렌더링 */}
                    {
                        posts.map((post) => (
                            // 포스트 영역 하나의 태그
                            <Div
                                key={post.id}
                                width="250px"
                                height="300px"
                                backgroundColor="gray"
                                margin="30px 20px"
                                borderRadius="15px"
                                justifyContent="start"
                                flexDirection="column">

                                {/* Link 컴포넌트를 사용하여 페이지 이동 */}
                                {/* 어드민 관리자만 뜨게 한다. */}
                                {
                                    auth.currentUser && (
                                        <MyButton
                                            onClick={() => deletePost(post.id)}
                                            width="50%"
                                            fontSize="1.3rem"
                                            fontWeight="bold"
                                            margin="20px 0px 0px 0px">삭제</MyButton>
                                    )
                                }

                                {/* 포스트의 제목 */}
                                <Div width="90%" justifyContent="center" flexDirection="column">
                                    <Link to={`/post/${post.id}`}>
                                        <H2 hoverColor="skyblue">{post.title}</H2>
                                    </Link>
                                </Div>

                                {/* 포스트의 이미지 */}
                                {
                                    post.imageUrl && (
                                        <Div width="60%">
                                            <Img
                                                width="100%"
                                                blur={true}
                                                src={post.imageUrl}
                                                alt="Post"
                                                widthOnMobile="100%"
                                                style={{
                                                    borderRadius: "15px"
                                                }}/>
                                        </Div>
                                    )
                                }

                            </Div>
                        ))
                    }
                </Div>
            </Page>
        </Page>
    );
}

export default Post;
