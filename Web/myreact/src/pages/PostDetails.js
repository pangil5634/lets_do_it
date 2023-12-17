// PostDeatils.js 파일
import React from 'react';
import {useParams} from 'react-router-dom';
import {useFirebase} from '../App';
import {Page} from '../components/Page';

function PostDetails() {
    // Firebase 컨텍스트에서 데이터 가져오기
    const {posts} = useFirebase();

    // URL의 동적 매개변수에서 postId 추출
    const {postId} = useParams();

    // postId에 해당하는 포스트 찾기
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return <div>포스트를 찾을 수 없습니다.</div>;
    }

    return (
        <Page height="100vh" alignItems="center">
            <Page
                width="90%"
                backgroundColor="white"
                alignItems="center"
                borderRadius="20px"
                height="100%">

                {/* 게시글 제목 */}
                <h1>{post.title}</h1>
                
                {/* 게시글 내용 */}
                <p>{post.content}</p>

                {/* 게시글 이미지 */}
                {
                    post.imageUrl && (
                        <div>
                            <img
                                src={post.imageUrl}
                                alt="Post"
                                style={{
                                    maxWidth: '100%'
                                }}/>
                        </div>
                    )
                }
            </Page>
        </Page>
    );
}

export default PostDetails;
